import { OpenAI } from "openai";

import { SUPPORTED_LANGUAGES, AUTO_LANGUAGE } from "../constants";
import { type FromLanguage, type Language } from "../types";

// No publicar esto api key del lado del cliente

// Obtén la clave de API desde las variables de entorno
const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

// Configuración de OpenAI, añadiendo `dangerouslyAllowBrowser: true` para permitir el uso en el navegador

// Crear una instancia de OpenAI con la configuración
const openai = new OpenAI({ apiKey, dangerouslyAllowBrowser: true });

export async function translate({
  fromLanguage,
  toLanguage,
  text,
}: {
  fromLanguage: FromLanguage;
  toLanguage: Language;
  text: string;
}) {
  if (fromLanguage === toLanguage) return text;
  const messages = [
    {
      role: "system",
      content:
        "You are a AI that translate text. You receive a text from the user. Do not answer, just translate the text. The original language is surrounded by `{{` and `}}`. You can Also recieve {{auto}} which means taht you have to detect the language. The language you translate to is surrounded by `[[` and `]]`.",
    },
    {
      role: "user",
      content: `Hola mundo {{Spanish}} [[English]]`,
    },
    {
      role: "assistant",
      content: "hello world",
    },
    {
      role: "user",
      content: "how are you? {{auto}} [[deutsch]]",
    },
    {
      role: "assistant",
      content: "wie geth es dir?",
    },
    {
      role: "user",
      content: "bon dia, com estas? {{auto}} [[Español]]",
    },
    {
      role: "assistant",
      content: "Buenos dias, ¿como estas?",
    },
  ];

  // Validación para el código del idioma de origen
  const fromCode =
    fromLanguage === AUTO_LANGUAGE ? "auto" : SUPPORTED_LANGUAGES[fromLanguage];
  // Obtener el código del idioma de destino
  const toCode = SUPPORTED_LANGUAGES[toLanguage];
  const completion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      ...messages,
      {
        role: "user" as "user", // Asegurarse de que el rol es "user"
        content: `${text} {{${fromCode}}} [[${toCode}]]`,
      },
    ],
  });

  return completion.choices[0]?.message?.content;
}
