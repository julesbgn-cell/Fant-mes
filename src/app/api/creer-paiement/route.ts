import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST() {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

  const origin = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: [
      {
        price_data: {
          currency: "eur",
          product_data: {
            name: "Audit Fantômes — détection des abonnements récurrents",
          },
          unit_amount: 1900,
        },
        quantity: 1,
      },
    ],
    success_url: `${origin}/paiement/succes?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}/paiement`,
  });

  return NextResponse.json({ url: session.url });
}
