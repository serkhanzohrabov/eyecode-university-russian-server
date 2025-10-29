import { NextResponse } from "next/server";
// app/api/sendMessage/route.js
export async function POST(req) {


  try {
    const message = await req.json();
    console.log("📩 Получено:", message)
     const text = `📩 Новое сообщение с сайта:
      ☎️ Номер: ${message.number}
      💬 Пользователь: ${message.name}
      `

    const TELEGRAM_BOT_TOKEN = '6809401772:AAFh2dQ9chGuFPISry7OXpNzJ8KtPaffk_I';
    const CHAT_ID = '688804750';

    console.log(TELEGRAM_BOT_TOKEN)

    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text:text
        // parse_mode: "HTML", // можно Markdown
      }),
    });

    const data = await res.json();

    return new Response(JSON.stringify(data), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}


export async function GET(req) {

        const { message } = await req.json();

        return new Response(JSON.stringify({message:'ВСЕ ОТЛИЧНО'}), { status: 200 });
}