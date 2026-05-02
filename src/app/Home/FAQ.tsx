"use client";

const FAQ =  () => {


    return (
        <div className="m-10">
            <h1 className="text-2xl text-center p-4 bg-yellow-500 text-white font-bold rounded-xl mb-4">All about you love to know (FAQ)</h1>

            <h2 className="text-xl font-semibold mt-5">Getting Started with AgriFlow</h2>
            <div className="collapse collapse-plus bg-base-100 border border-base-300 mb-2">
                <input type="checkbox" name="my-accordion-3" defaultChecked />
                <div className="collapse-title font-semibold">How do I create an account?</div>
                <div className="collapse-content text-sm">Simply click the "Sign Up" button in the top right corner and follow the registration process.</div>
            </div>
            <div className="collapse collapse-plus bg-base-100 border border-base-300 mb-2">
                <input type="checkbox" name="my-accordion-3" defaultChecked />
                <div className="collapse-title font-semibold">How do I choose between Farmer, Buyer, or Delivery Partner roles?</div>
                <div className="collapse-content text-sm">For first time Sign-up you can find option to choose your preferred role during the registration process, or you can update your role later in your settings.</div>
            </div>
            <div className="collapse collapse-plus bg-base-100 border border-base-300 mb-2">
                <input type="checkbox" name="my-accordion-3" />
                <div className="collapse-title font-semibold">Is AgriFlow free to use?</div>
                <div className="collapse-content text-sm">Yes, AgriFlow is free to use for only normal users, but for role-based features, there might be monthly subscription fees.</div>
            </div>
            <div className="collapse collapse-plus bg-base-100 border border-base-300 mb-2">
                <input type="checkbox" name="my-accordion-3" />
                <div className="collapse-title font-semibold">How do I update my profile information?</div>
                <div className="collapse-content text-sm">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
            </div>

            <h2 className="text-xl font-semibold mt-5">For Farmers</h2>
            <div className="collapse collapse-plus bg-base-100 border border-base-300 mb-2">
                <input type="checkbox" name="my-accordion-3" defaultChecked />
                <div className="collapse-title font-semibold">How do I add products to the marketplace?</div>
                <div className="collapse-content text-sm">If you are varified as a farmer then you will have your own dashboard where you can list your products for sale.</div>
            </div>
            <div className="collapse collapse-plus bg-base-100 border border-base-300 mb-2">
                <input type="checkbox" name="my-accordion-3" defaultChecked />
                <div className="collapse-title font-semibold">What is the "Go Live" feature and how do I use it?</div>
                <div className="collapse-content text-sm">On this option you can make your products live and available for purchase.</div>
            </div>
            <div className="collapse collapse-plus bg-base-100 border border-base-300 mb-2">
                <input type="checkbox" name="my-accordion-3" defaultChecked />
                <div className="collapse-title font-semibold">How are payments processed when I sell crops?</div>
                <div className="collapse-content text-sm">Payments are processed through our secure payment gateway, and funds are transferred to your account within 3-5 business days.</div>
            </div>
        </div>
    );
};

export default FAQ;