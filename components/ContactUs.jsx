import Link from "next/link";

const ContactUs = () => {
  return (
    <section className="w-full flex-col mt-20 mb-20" id="sectionContactUs">
      <div className="w-full flex-col flex-center">
        <h2 className="head_text">Contact Us</h2>
        <p className="desc text-center">If you have any questions, suggestions, or <Link href="/FeedBack" className="underline hover:underline-offset-8">feedback</Link>, please feel free to contact us. We value your input and look forward to hearing from you.</p>

        <address className="desc text-center">
          Email: <a href="mailto:argkmr2001@gmail.com">argkmr2001@gmail.com</a>
          <br />
          Phone: +91 (816) 001-5871<br />
          Address: Old Mahabalipuram Road, Chennai, India
        </address>
      </div>
    </section>
  );
};



export default ContactUs;
