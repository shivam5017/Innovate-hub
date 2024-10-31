import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-3xl  mx-auto p-6 shadow-md rounded-lg pt-24 font-primary">
      <h1 className="text-lg lg:text-xl font-bold text-center mb-4">
        Privacy Policy for Innovate HUB
      </h1>
      <p className="mb-4">
        <strong>Effective Date:</strong> 31.10.2024
      </p>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Information We Collect</h2>
        <h3 className="text-lg font-medium">1. Personal Information</h3>
        <p className="mb-2">
          We collect personal information such as your email address when you
          register or subscribe to our updates.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-sm font-semibold mb-2">
          How We Use Your Information
        </h2>
        <p className="mb-2">
          We use your email address for the following purposes:
        </p>
        <ul className="list-disc list-inside mb-2">
          <li>To send you updates and news from Innovate Hub.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-sm font-semibold mb-2">
          Disclosure of Your Information
        </h2>
        <p className="mb-2">
          We do not sell, trade, or otherwise transfer your personal information
          to outside parties. Your email address will only be shared if required
          by law.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-sm font-semibold mb-2">
          Security of Your Information
        </h2>
        <p className="mb-2">
          We take the security of your personal information seriously. We
          implement reasonable measures to protect your email address from
          unauthorized access, but no method of transmission over the internet
          is 100% secure.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-sm font-semibold mb-2">Your Rights</h2>
        <p className="mb-2">
          Depending on your location, you may have rights regarding your
          personal information:
        </p>
        <ul className="list-disc list-inside mb-2">
          <li>The right to access, correct, or delete your email data.</li>
          <li>
            The right to withdraw your consent for us to use your email address.
          </li>
        </ul>
        <p className="mb-2">
          If you wish to exercise any of these rights, please contact us at
          innovatehubhq@gmail.com.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-sm font-semibold mb-2">
          Changes to This Privacy Policy
        </h2>
        <p className="mb-2">
          We may update our Privacy Policy from time to time. We will notify you
          of any changes by posting the new policy on this page.
        </p>
      </section>

      <section>
        <h2 className="text-sm font-semibold mb-2">Contact Us</h2>
        <p className="mb-2">
          If you have any questions about this Privacy Policy, please contact us
          at: innovatehubhq@gmail.com
          <br />
          Discord: 
           <button className="text-blue-600" onClick={()=> window.open("https://discord.gg/xtYsPCCC","_blank")}>
                Innovate HUB
           </button>
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
