import { useLanguage } from "@/contexts/language-context";

type Moment = "number" | "brain" | "history";

const notes = {
  es: {
    number: { label: "Hilo del autor · 01", title: "Una cifra puede orientar y aun así quedarse corta.", text: "Ese es el problema incómodo de explicar una mente: necesitamos medidas para comparar, pero podemos terminar confundiendo la medida con la persona. En este atlas uso los números como punto de partida, nunca como biografía." },
    brain: { label: "Hilo del autor · 02", title: "Mirar el cerebro no significa haber explicado a alguien.", text: "Una imagen puede mostrar una asociación promedio y seguir sin decir cómo piensa una persona concreta. Por eso cada región conserva tres capas: lo que hace, lo que encontró la investigación y lo que todavía no podemos concluir." },
    history: { label: "Hilo del autor · 03", title: "La historia ordena fechas; las ideas rara vez fueron tan ordenadas.", text: "Los modelos coexistieron, discreparon y cambiaron de significado. Leerlos en secuencia ayuda a orientarse. Leer sus límites evita convertir esa secuencia en una marcha inevitable hacia la verdad." },
  },
  en: {
    number: { label: "Author's thread · 01", title: "A number can guide us and still fall short.", text: "That is the uncomfortable part of explaining a mind: we need measures to compare, yet we can end up confusing the measure with the person. In this atlas, numbers are a starting point, never a biography." },
    brain: { label: "Author's thread · 02", title: "Seeing the brain does not mean we have explained a person.", text: "An image may reveal an average association and still say nothing decisive about one individual. That is why each region keeps three layers: what it does, what research found and what we still cannot conclude." },
    history: { label: "Author's thread · 03", title: "History orders dates; ideas were rarely so orderly.", text: "Models coexisted, disagreed and changed meaning. Reading them in sequence helps us find our way. Reading their limits keeps that sequence from becoming an inevitable march toward truth." },
  },
};

export default function EditorialThread({ moment }: { moment: Moment }) {
  const { lang } = useLanguage();
  const note = notes[lang][moment];
  return <aside className="editorial-thread" aria-label={note.label}><span>{note.label}</span><div><h2>{note.title}</h2><p>{note.text}</p></div><i aria-hidden="true">M</i></aside>;
}
