import Stripe from 'stripe';

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2023-10-16',
});

export async function createCheckoutSession(
  invoiceId: string,
  amount: number,
  userEmail: string
) {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: `Invoice ${invoiceId}`,
          },
          unit_amount: Math.round(amount * 100),
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${process.env.NEXTAUTH_URL}/dashboard/invoices?success=true`,
    cancel_url: `${process.env.NEXTAUTH_URL}/dashboard/invoices?canceled=true`,
    customer_email: userEmail,
    metadata: {
      invoiceId,
    },
  });

  return session;
}
