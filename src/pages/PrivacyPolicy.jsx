import React from 'react'
import { useEffect } from "react";

const PrivacyPolicy = () => {
    useEffect(() => {
    document.title = "Privacy Policy | Molave Street Barbers";
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", "Learn how Molave Barbershop collects, uses, and protects your personal information.");
    document
      .querySelector('meta[name="keywords"]')
      ?.setAttribute("content", "privacy policy, data protection, barbershop privacy, Molave");
  }, []);

  return (
    <div>
        <div className='mx-auto max-w-[850px] min-h-screen px-10 py-15'>
            <div className='text-3xl lg:text-4xl text-center mb-5' style={{fontFamily: 'satoshi-bold'}}>
                <h1>Privacy Policy</h1>
            </div>

            <div className='text-left text-base tracking-[0.4px] leading-[24px]' style={{fontFamily: 'satoshi-medium'}}>
                <p>
                    Molave Street Barbers ("company", "we", "us", or "our") is the registered owner and operator of the Molave Street Barbers brand, including its
                    physical barbershop branches, official website, and mobile application.
                </p>
                <p className='mt-4'>
                    Our company is commited to protecting and respecting the privacy of your personal data in accordance with Republic Act No. 10173, also known as 
                    the Data Privacy Act of 2012 ("Data Policy Act"), its Implementing Rules and Regulations, and all related issuances of the National Privacy
                    Commission (NPC) of the Philippines.
                </p>
                <p className='mt-4'>
                    The Molave Street Barbers Privacy Policy ("Policy") describes how we collect, use, disclose, store, and dispose of personal information obtained
                    from customers through our website, mobile application, online booking system, digital forms, and other online platforms (collectively referred
                    to as the "Services").
                </p>
                <p className='mt-4'>
                    By accessing our website, using our mobile app, or availing of our in-store and online services, you consent to the collection and use of your
                    information as described in this Policy.
                </p>
                <p className='mt-4' style={{fontFamily: 'satoshi-bold'}}>
                    What Types of Information Does Molave Street Barbers Collect?
                </p>
                <p>
                    Personal Information that may be collected by Molave Street Barbers includes, but is not limited to:
                    <ul className='list-disc px-7'>
                        <li>Full name, phone number, and email address;</li>
                        <li>Account information, such as username, password, and booking history;</li>
                    </ul>
                    We may also collect information such as:
                    <ul className='list-disc px-7'>
                        <li>When you book an appointment through our app — your name, preferred barber, date and time of appointment, and contact details;</li>
                        <li>When you submit feedback or inquiries — your comments, rating, or suggestions;</li>
                        <li>When you interact with our online platforms — your IP address, browser type, device information, operating system, and usage data.</li>
                    </ul>
                    Our collection of online usage data may involve cookies and web beacons:
                    <ul className='list-disc px-7'>
                        <li>Cookies are small data files stored on your device that help us improve functionality, remember your preferences, and analyze website or app performance.</li>
                        <li>Web beacons are electronic images used to track visits, measure campaign effectiveness, and determine whether emails have been opened or acted upon.</li>
                    </ul>
                    We may also collect aggregated or anonymized data that does not directly identify you, and we may combine this with other information obtained 
                    from third parties for analysis or improvement of our services.
                </p>
                <p className='mt-4' style={{fontFamily: 'satoshi-bold'}}>
                    How Does Molave Street Barbers Use Your Information?
                </p>
                <p>
                    We may use the information collected for the following purposes:
                    <ul className='list-disc px-7'>
                        <li>To process and manage your bookings, transactions, and accounts on our website or app;</li>
                        <li>To communicate with you regarding appointments, reminders, service updates, and promotions;</li>
                        <li>To personalize your experience by providing tailored offers and relevant recommendations;</li>
                        <li>To improve our products, services, and platforms based on customer feedback and analytics; </li>
                        <li>To send notifications, announcements, and promotional messages (subject to your consent);</li>
                        <li>To comply with legal requirements and maintain proper business records in accordance with Philippine law.</li>
                    </ul>
                    All collected personal information will only be retained as long as necessary for these stated purposes, unless a longer retention period 
                    is required by law.
                </p>
                <p className='mt-4' style={{fontFamily: 'satoshi-bold'}}>
                    Data Retention and Disposal
                </p>
                <p>
                    Personal data collected through our website, mobile app, and in-store service forms will be retained for five (5) years from the date of your 
                    last transaction or system activity. <br />
                    After this retention period, your data will be securely deleted or destroyed, both physically and digitally, using industry-standard data disposal
                    methods. Once permanently deleted, your personal information cannot be recovered.
                </p>
                <p className='mt-4' style={{fontFamily: 'satoshi-bold'}}>
                    Does Molave Street Barbers Share Personal Information with Third Parties?
                </p>
                <p>
                    We may share your personal information under the following conditions:
                    <ul className='list-disc px-7'>
                        <li>With your consent, when required to complete a transaction or provide a requested service;</li>
                        <li>With our affiliated service providers, such as payment processors, cloud hosting platforms, and marketing partners, who are contractually obligated to keep your information secure;</li>
                        <li>With regulatory or law enforcement authorities, when required by law, legal process, or government request;</li>
                        <li>To protect our rights, business, and customers, including fraud prevention or enforcing our Terms and Conditions;</li>
                        <li>In case of business transfers, mergers, or acquisitions, your information may be transferred as part of the company's assets.</li>
                    </ul>
                    We may also share aggregated or anonymized data that cannot personally identify you, for analytical or statistical purposes.
                </p>
                <p className='mt-4' style={{fontFamily: 'satoshi-bold'}}>
                    What Choices Does Molave Street Barbers Offer About Your Personal Information?
                </p>
                <p>
                    You have the right to:
                    <ul className='list-disc px-7'>
                        <li>Access and obtain a copy of your personal information;</li>
                        <li>Request correction of inaccurate or outdated information;</li>
                        <li>Withdraw consent to data collection or marketing communications;</li>
                        <li>Request deletion of your personal data, subject to legal or contractual restrictions.</li>
                    </ul>
                    To exercise any of these rights or make privacy-related requests, please contact us through the details provided below. <br />
                    If you opt out of receiving marketing or promotional emails, we may still send you essential communications related to your bookings, accounts,
                    or transactions. <br />
                    You may also adjust your browser or device settings to manage or reject cookies; however, doing so may affect certain website or app functionalities.
                </p>
                <p className='mt-4' style={{fontFamily: 'satoshi-bold'}}>
                    How is Personal Information Secured?
                </p>
                <p>
                    Molave Street Barbers implements organizational, physical, and technical measures to protect your personal data from unauthorized access, alteration,
                    disclosure, or destruction. <br />
                    These include:
                    <ul className='list-disc px-7'>
                        <li>Encryption of digital records and databases;</li>
                        <li>Secure servers and access control systems;</li>
                        <li>Confidentiality agreements with authorized personnel;</li>
                        <li>Regular system audits and data protection training.</li>
                    </ul>
                    While we apply reasonable safeguards, no method of data transmission or storage is completely secure. You acknowledge that the transmission of information
                    over the Internet carries inherent risks.
                </p>
                <p className='mt-4' style={{fontFamily: 'satoshi-bold'}}>
                    Privacy Policy Updates
                </p>
                <p>
                    We may update this Privacy Policy from time to time. Any changes will be posted on our website and mobile app, along with the date of the last revision. <br />
                    We encourage you to review this page periodically to stay informed about how we protect your information. Significant updates that affect your personal
                    data usage will be communicated to you directly through email or system notifications.
                </p>
                <p className='mt-4' style={{fontFamily: 'satoshi-bold'}}>
                    Questions and Feedback
                </p>
                <p>
                    If you have questions, concerns, or requests related to this Privacy Policy or your personal information, you may contact us at:
                    <br /><br />
                    Attention: Data Protection Officer <br />
                    Molave Street Barbers <br />
                    Address: 112 Upper Molave Street, Payatas B, 1119 Quezon City, Philippines <br />
                    Email: servicemolavestreetbarbers@gmail.com <br />
                    Contact Number: 0949-620-9911 <br />
                    Facebook Page: Molave Street Barbers Official
                </p>
            </div>
        </div>
    </div>
  )
}

export default PrivacyPolicy
