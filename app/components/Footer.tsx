export default function Footer() {
  return (
    <footer className="border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div>
            <div className="text-sm font-semibold text-gray-900">AutomiseIT</div>
            <p className="mt-2 max-w-md text-sm text-gray-600">
              Digital and process automation assessments for medium-sized organisations.
              Ongoing fees only based on verified value delivered.
            </p>
            <p className="mt-3 text-sm text-gray-600">
              100% Australian-based support. Real people, ready to help.
            </p>
          </div>

          <div className="text-sm text-gray-600">
            <div className="font-semibold text-gray-900">Contact</div>
            <p className="mt-2">Steve Congdon</p>
            <p>Email: Steve.Congdon@automiseit.com.au</p>
            <p>Phone: 0411 013 193</p>
            <p className="mt-2 text-xs text-gray-500">
              Built with AI-assisted engineering workflows.
            </p>
          </div>
        </div>

        <div className="mt-8 text-xs text-gray-500">
          © {new Date().getFullYear()} AutomiseIT. All rights reserved.
          <span className="mx-2">|</span>
          <a href="/privacy" className="hover:text-violet-600 underline">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}
