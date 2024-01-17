import Logo from './logo'

export default function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Top area: Blocks */}
        <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12 border-t border-gray-200">

          {/* 1st block */}
          <div className="sm:col-span-12 lg:col-span-12 items-center">
            <div className="sm:col-span-12 lg:col-span-12 gap-4 flex items-center">
              <div className="mb-2">
                <Logo />
              </div>
              <h2 className="text-s font-extrabold leading-tighter tracking-tighter">Cornell Exam Schedule Viewer</h2>
            </div>
            <div className="text-sm text-gray-600">
              Disclaimer: Cornell Exam Schedule Viewer is an independent service NOT officially affiliated with Cornell University. It aims to provide accurate exam schedule information for Cornell students by parsing data from the registrar's website. However, it is NOT a substitute for official announcements by the university or instructors. Users should NOT rely solely on this service for exam-related information. In case of discrepancies between information by this service and official university communications, the information issued by Cornell University shall prevail. For any issues or concerns, users are advised to promptly contact the developer at cornell.exam@gmail.com.
            </div>
          </div>

          <div className="sm:col-span-12 lg:col-span-12 items-center text-sm text-gray-600">✉️ cornell.exam@gmail.com. This landing page is built with a template by <a href="https://github.com/cruip/tailwind-landing-page-template" style={{ textDecoration: 'underline' }}>cruip</a>.</div>

        </div>

      </div>
    </footer>
  )
}
