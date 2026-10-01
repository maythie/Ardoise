import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const origin = new URL(request.url).origin;
  const key = process.env.STRIPE_SECRET_KEY;

  if (!key) {
    return NextResponse.redirect(`${origin}/paiement-echoue`, 303);
  }

  const body = new URLSearchParams({
    mode: "subscription",
    locale: "fr",
    success_url: `${origin}/merci`,
    cancel_url: `${origin}/paiement-echoue`,
    "line_items[0][quantity]": "1",
    "line_items[0][price_data][currency]": "eur",
    "line_items[0][price_data][unit_amount]": "3500",
    "line_items[0][price_data][recurring][interval]": "month",
    "line_items[0][price_data][product]": "prod_VM8iUAfbhxrgq2",
  });

  try {
    const res = await fetch("https://api.stripe.com/v1/checkout/sessions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body,
    });
    const session = await res.json();
    if (!res.ok || !session.url) {
      return NextResponse.redirect(`${origin}/paiement-echoue`, 303);
    }
    return NextResponse.redirect(session.url, 303);
  } catch {
    return NextResponse.redirect(`${origin}/paiement-echoue`, 303);
  }
}
