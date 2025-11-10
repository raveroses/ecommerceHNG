"use server";
import { ProductsTypes } from "@/_types/types";
import nodemailer from "nodemailer";
// process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function sendOrderEmail(
  userEmail: string,
  userName: string,
  product: ProductsTypes[]
) {
  try {
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      throw new Error(
        "❌ Missing EMAIL_USER or EMAIL_PASS environment variables"
      );
    }

    const productMap = product
      .map(
        (item) => `
      <div style="display: flex; align-items: center; margin-bottom: 20px; padding-bottom: 20px; border-bottom: 1px solid #e5e5e5;">
        <div style="width: 64px; height: 64px; background-color: #f1f1f1; border-radius: 8px; margin-right: 16px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
          <div style="width: 45px; height: 45px; background: linear-gradient(135deg, #D87D4A 0%, #c96a3a 100%); border-radius: 4px;">
          <img src="https://ecommerce-hng-seven.vercel.app${item.image}" alt="image" />
          </div>
        </div>
        <div style="flex: 1;">
          <div style="color: #333; font-size: 15px; font-weight: bold; margin-bottom: 4px;">${item.name}</div>
          <div style="color: #666; font-size: 14px;">${item.price}</div>
        </div>
        <div style="color: #666; font-size: 14px; margin-left: 16px;">x1</div>
      </div>
    `
      )
      .join("");

    console.log("PRODUCT", product);
    const info = await transporter.sendMail({
      from: '"Audiophile" <odekunlewaris@gmail.com>',
      to: userEmail,
      subject: `Your Product Order Confirmation`,
      html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Order Confirmation - Audiophile</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f5f5f5; font-family: Arial, sans-serif;">
    <table role="presentation" style="width: 100%; border-collapse: collapse;">
        <tr>
            <td align="center" style="padding: 40px 0;">
                <table role="presentation" style="width: 600px; max-width: 100%; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                    <!-- Header -->
                    <tr>
                        <td style="padding: 40px 40px 20px; text-align: center; background: linear-gradient(135deg, #D87D4A 0%, #c96a3a 100%); border-radius: 8px 8px 0 0;">
                            <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: bold;">AUDIOPHILE</h1>
                        </td>
                    </tr>
                    
                    <!-- Confirmation Message -->
                    <tr>
                        <td style="padding: 40px;">
                            <div style="text-align: center; margin-bottom: 30px;">
                                <div style="width: 60px; height: 60px; background-color: #22c55e; border-radius: 50%; margin: 0 auto 20px; display: flex; align-items: center; justify-content: center;">
                                    <span style="color: white; font-size: 30px;">✓</span>
                                </div>
                                <h2 style="margin: 0 0 10px; color: #333; font-size: 24px;">Order Confirmed!</h2>
                                <p style="margin: 0; color: #666; font-size: 16px;">Hi ${userName}</p>
                            </div>
                            
                            <p style="color: #555; font-size: 16px; line-height: 1.6; margin-bottom: 30px;">
                                Thank you for ordering from Audiophile! We're excited to get your products to you.
                            </p>
                            
                            <!-- Order Items -->
                            <div style="background-color: #f9f9f9; border-radius: 8px; padding: 24px; margin-bottom: 30px;">
                                <h3 style="margin: 0 0 20px; color: #333; font-size: 18px; font-weight: bold;">Your Order</h3>
                                
     ${productMap}
                         
                            <p style="color: #555; font-size: 16px; line-height: 1.6; margin-bottom: 30px;">
                                We're preparing your order and will notify you once it's shipped. You'll receive a tracking number via email.
                            </p>
                            
                            <!-- CTA Button -->
                            <div style="text-align: center; margin-bottom: 30px;">
                                <a href="https://ecommerce-hng-seven.vercel.app/checkout" 
                                   style="display: inline-block; background-color: #D87D4A; color: white; padding: 14px 40px; border-radius: 6px; text-decoration: none; font-weight: bold; font-size: 16px; letter-spacing: 1px;">
                                    VIEW YOUR ORDERS
                                </a>
                            </div>
                            
                            <p style="color: #555; font-size: 16px; line-height: 1.6; text-align: center; margin: 0;">
                                Thanks for shopping with us! 🎧
                            </p>
                        </td>
                    </tr>
                    
                    <!-- Footer -->
                    <tr>
                        <td style="padding: 30px 40px; background-color: #f9f9f9; border-radius: 0 0 8px 8px; text-align: center;">
                            <p style="margin: 0 0 10px; color: #999; font-size: 14px;">
                                Questions? Contact us at <a href="mailto:support@audiophile.com" style="color: #D87D4A; text-decoration: none;">support@audiophile.com</a>
                            </p>
                            <p style="margin: 0; color: #999; font-size: 12px;">
                                © 2024 Audiophile. All rights reserved.
                            </p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>`,
    });
    console.log("✅ Message sent:", info.messageId);
    return { success: true };
  } catch (err) {
    console.error("❌ sendOrderEmail error:", err);
    throw new Error(err instanceof Error ? err.message : "Unknown error");
  }
}
