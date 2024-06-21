import Container from "@/app/_components/container";
import { Intro } from "@/app/_components/intro";
import { getAllPosts } from "@/lib/api";

export default function Profile() {


  return (
    <main>
        <Container>
        <Intro />
        <h1>プロフィール</h1>
      <section>
      <h2 className="text-2xl mt-4">私について</h2>
        <h2 className="text-2xl mt-4">連絡先</h2>
      </section>
      <section>
        <h2>連絡先</h2>
        <p>ここに連絡先情報を記述します。例えば、メールアドレス、SNSのリンクなど。</p>
      </section>
        </Container>
    </main>
  );
}
