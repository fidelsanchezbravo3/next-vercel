import Link from "next/link";
import { MainLayout } from "../../layout/MainLayout";

export default function ContactPage() {
  return (
    <MainLayout>
      <h1>Contact Page</h1>
      <h1 className={'title'}>
        {/* Ir a <a href="/about">About</a> */}
        Ir a <Link href="/">Home</Link>
      </h1>
      <div>
        <p className={'description'}>
          Get started by editing{""}
          <code className={'code'}>pages/contact.js</code>
        </p>
      </div>
    </MainLayout>
  );
}
