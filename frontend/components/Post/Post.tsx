export const Post = ({ title, content, date }: any) => (
  <section>
    <header>
      <h3> {title}</h3>
    </header>
    <article>{content}</article>
    <section>
      <p>{date}</p>
    </section>
  </section>
);
