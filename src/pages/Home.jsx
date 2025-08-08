// import React from 'react';
import './styles.css'

const Home = () => {
  return (
    <>
      {/* Top Bar */}
      <div className="bg-green-800 text-white py-2 px-4 text-sm">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex space-x-4">
        <span>
          <i className="fas fa-clock mr-1" /> Sunday School: 7:30 AM &amp;
          Sunday Service: 9:00 AM
        </span>
        <span>
          <i className="fas fa-map-marker-alt mr-1" /> 16 Duke Town Close, State
          Housing Estate
        </span>
      </div>
      <div className="flex space-x-4">
        <a href="#" className="hover:text-yellow-300">
          <i className="fab fa-facebook-f" />
        </a>
        <a href="#" className="hover:text-yellow-300">
          <i className="fab fa-instagram" />
        </a>
        <a href="#" className="hover:text-yellow-300">
          <i className="fab fa-youtube" />
        </a>
      </div>
    </div>
  </div>
  {/* Navigation */}
  <nav className="bg-white shadow-md sticky top-0 z-50">
    <div className="container mx-auto px-4 py-3 flex justify-between items-center">
      <div className="flex items-center">
        <img
          src="images/church-logo-removebg-preview (1).png"
          alt="Church Logo"
          className="h-12 mr-3"
        />
        <span className="title-font text-2xl font-bold text-green-800">
          Great Harvest BibleChurch
        </span>
      </div>
      <div className="hidden md:flex space-x-8">
        <a
          href="#"
          className="nav-link text-gray-800 font-medium hover:text-yellow-600 transition"
        >
          Home
        </a>
        <a
          href="#"
          className="nav-link text-gray-800 font-medium hover:text-yellow-600 transition"
        >
          About
        </a>
        <a
          href="#"
          className="nav-link text-gray-800 font-medium hover:text-yellow-600 transition"
        >
          Ministries
        </a>
        <a
          href="#"
          className="nav-link text-gray-800 font-medium hover:text-yellow-600 transition"
        >
          Sermons
        </a>
        <a
          href="#"
          className="nav-link text-gray-800 font-medium hover:text-yellow-600 transition"
        >
          Events
        </a>
        <a
          href="#"
          className="nav-link text-gray-800 font-medium hover:text-yellow-600 transition"
        >
          Contact
        </a>
      </div>
      <div className="hidden md:block">
        <a
          href="#"
          className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-md font-medium transition"
        >
          Give Online
        </a>
      </div>
      <button className="md:hidden text-gray-800 focus:outline-none">
        <i className="fas fa-bars text-2xl" />
      </button>
    </div>
  </nav>
  {/* Hero Section */}
  <section className="hero flex items-center justify-center text-white relative">
    <div className="container mx-auto px-4 text-center">
      <h1 className="title-font text-4xl md:text-6xl font-bold mb-4">
        Great Harvest Bible Church
      </h1>
      <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
        The harvest is great...
      </p>
      <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
        <a
          href="#"
          className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-md font-medium transition text-lg"
        >
          Plan Your Visit
        </a>
        <a
          href="#"
          className="bg-transparent hover:bg-white hover:text-green-800 border-2 border-white text-white px-6 py-3 rounded-md font-medium transition text-lg"
        >
          Watch Live
        </a>
      </div>
      {/* Countdown to next service */}
      <div className="mt-12 bg-black bg-opacity-50 p-4 rounded-lg inline-block">
        <p className="mb-2">Next Sunday Service in:</p>
        <div className="flex justify-center space-x-2">
          <div className="countdown-item px-3 py-2 rounded">
            <span className="text-2xl font-bold" id="days">
              00
            </span>
            <span className="text-xs">Days</span>
          </div>
          <div className="countdown-item px-3 py-2 rounded">
            <span className="text-2xl font-bold" id="hours">
              00
            </span>
            <span className="text-xs">Hours</span>
          </div>
          <div className="countdown-item px-3 py-2 rounded">
            <span className="text-2xl font-bold" id="minutes">
              00
            </span>
            <span className="text-xs">Minutes</span>
          </div>
          <div className="countdown-item px-3 py-2 rounded">
            <span className="text-2xl font-bold" id="seconds">
              00
            </span>
            <span className="text-xs">Seconds</span>
          </div>
        </div>
      </div>
    </div>
    <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-4">
      <a href="#welcome" className="text-white animate-bounce">
        <i className="fas fa-chevron-down text-3xl" />
      </a>
    </div>
  </section>
  {/* Welcome Section */}
  <section id="welcome" className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="title-font text-3xl md:text-4xl font-bold text-green-800 mb-4">
          Welcome to Our Church
        </h2>
        <div className="w-24 h-1 bg-yellow-600 mx-auto mb-6" />
        <p className="text-gray-600 max-w-3xl mx-auto">
          We are a community of believers committed to loving God and loving
          people. Our mission is to lead people into a growing relationship with
          Jesus Christ.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition text-center">
          <div className="text-yellow-600 text-4xl mb-4">
            <i className="fas fa-hands-helping" />
          </div>
          <h3 className="text-xl font-bold mb-3">Our Mission</h3>
          <p className="text-gray-600">
            To make disciples of Jesus Christ who love God, love others, and
            serve the world.
          </p>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition text-center">
          <div className="text-yellow-600 text-4xl mb-4">
            <i className="fas fa-church" />
          </div>
          <h3 className="text-xl font-bold mb-3">Service Times</h3>
          <p className="text-gray-600 mb-2">Sunday School: 7:30 AM </p>
          <p className="text-gray-600 mb-2">Sunday Service: 9:00 AM</p>
          <p className="text-gray-600">Monday Discipleship class: 5:00 PM</p>
          <p className="text-gray-600">Tuesday Bible Study: 5:00 PM</p>
          <p className="text-gray-600">Thursday Healing service: 5:00 PM</p>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition text-center">
          <div className="text-yellow-600 text-4xl mb-4">
            <i className="fas fa-map-marked-alt" />
          </div>
          <h3 className="text-xl font-bold mb-3">Location</h3>
          <p className="text-gray-600">
            16 Duke Town Close, State Housing Estate, Calabar, Cross River
            State.
          </p>
          <a
            href="https://maps.app.goo.gl/fDJcLNDXz8Cxb88J6"
            className="text-green-700 hover:underline mt-2 inline-block"
          >
            Get Directions
          </a>
        </div>
      </div>
    </div>
  </section>
  {/* Latest Sermon */}
  <section className="py-16 bg-gray-100">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="title-font text-3xl md:text-4xl font-bold text-green-800 mb-4">
          Latest Sermons
        </h2>
        <div className="w-24 h-1 bg-yellow-600 mx-auto mb-6" />
        <p className="text-gray-600 max-w-3xl mx-auto">
          Watch or listen to our latest messages. All sermons are also available
          on our podcast.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Sermon Card 1 */}
        <div className="sermon-card bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="relative">
            <img
              src="images/ghbc34.jpg"
              alt="Sermon"
              className="w-full h-48 object-cover"
            />
            <div className="play-icon absolute inset-0 flex items-center justify-center opacity-90 transition">
              <a
                href="https://www.facebook.com/share/v/19FKahCALZ/"
                target="_blank"
                rel="noopener"
              >
                <div className="bg-yellow-600 bg-opacity-90 rounded-full p-4">
                  <i className="fas fa-play text-white text-xl" />
                </div>
              </a>
            </div>
          </div>
          <div className="p-6">
            <span className="text-sm text-yellow-600">July 6, 2025</span>
            <h3 className="text-xl font-bold mt-2 mb-3">The Seventh Day</h3>
            <p className="text-gray-600 mb-4">
              Apostle Elias Emmanuel emphasizes the day of completion and its
              importance...
            </p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">
                <i className="fas fa-clock mr-1" /> 10 min
              </span>
              <div className="flex space-x-2">
                <a
                  href="https://www.facebook.com/share/v/19FKahCALZ/"
                  className="text-gray-500 hover:text-yellow-600"
                >
                  <i className="fas fa-play-circle" />
                </a>
                <a href="#" className="text-gray-500 hover:text-yellow-600">
                  <i className="fas fa-download" />
                </a>
                <a
                  href="https://www.facebook.com/share/v/19FKahCALZ/"
                  className="text-gray-500 hover:text-yellow-600"
                >
                  <i className="fas fa-share-alt" />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Sermon Card 2 */}
        <div className="sermon-card bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="relative">
            <img
              src="images/ghbc6.jpg"
              alt="Sermon"
              className="w-full h-48 object-cover"
            />
            <div className="play-icon absolute inset-0 flex items-center justify-center opacity-90 transition">
              <a
                href="https://www.facebook.com/share/v/18TDkdQrvN/"
                target="_blank"
                rel="noopener"
              >
                <div className="bg-yellow-600 bg-opacity-90 rounded-full p-4">
                  <i className="fas fa-play text-white text-xl" />
                </div>
              </a>
            </div>
          </div>
          <div className="p-6">
            <span className="text-sm text-yellow-600">June 29, 2025</span>
            <h3 className="text-xl font-bold mt-2 mb-3">
              The Great Invitation
            </h3>
            <p className="text-gray-600 mb-4">John 7:37-39</p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">
                <i className="fas fa-clock mr-1" /> 7 min
              </span>
              <div className="flex space-x-2">
                <a
                  href="https://www.facebook.com/share/v/18TDkdQrvN/"
                  className="text-gray-500 hover:text-yellow-600"
                >
                  <i className="fas fa-play-circle" />
                </a>
                <a
                  href="https://www.facebook.com/share/v/18TDkdQrvN/"
                  className="text-gray-500 hover:text-yellow-600"
                >
                  <i className="fas fa-download" />
                </a>
                <a
                  href="https://www.facebook.com/share/v/18TDkdQrvN/"
                  className="text-gray-500 hover:text-yellow-600"
                >
                  <i className="fas fa-share-alt" />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Sermon Card 3 */}
        <div className="sermon-card bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="relative">
            <img
              src="images/ghbc25.jpg"
              alt="Sermon"
              className="w-full h-48 object-cover"
            />
            <div className="play-icon absolute inset-0 flex items-center justify-center opacity-90 transition">
              <a
                href="https://web.facebook.com/share/v/1CLjnUhKUF/"
                target="_blank"
                rel="noopener"
              >
                <div className="bg-yellow-600 bg-opacity-90 rounded-full p-4">
                  <i className="fas fa-play text-white text-xl" />
                </div>
              </a>
            </div>
          </div>
          <div className="p-6">
            <span className="text-sm text-yellow-600">August 13, 2023</span>
            <h3 className="text-xl font-bold mt-2 mb-3">
              The Issue of Identity
            </h3>
            <p className="text-gray-600 mb-4">
              In this sermon, we explore the importance of understanding our
              identity in Christ and how it shapes our lives.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">
                <i className="fas fa-clock mr-1" /> 51 min
              </span>
              <div className="flex space-x-2">
                <a
                  href="https://web.facebook.com/share/v/1CLjnUhKUF/"
                  className="text-gray-500 hover:text-yellow-600"
                >
                  <i className="fas fa-play-circle" />
                </a>
                <a
                  href="https://web.facebook.com/share/v/1CLjnUhKUF/"
                  className="text-gray-500 hover:text-yellow-600"
                >
                  <i className="fas fa-download" />
                </a>
                <a
                  href="https://web.facebook.com/share/v/1CLjnUhKUF/"
                  className="text-gray-500 hover:text-yellow-600"
                >
                  <i className="fas fa-share-alt" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-12">
        <a
          href="#"
          className="inline-block bg-green-800 hover:bg-green-700 text-white px-6 py-3 rounded-md font-medium transition"
        >
          View All Sermons
        </a>
      </div>
    </div>
  </section>
  {/* Upcoming Events */}
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="title-font text-3xl md:text-4xl font-bold text-green-800 mb-4">
          Upcoming Events
        </h2>
        <div className="w-24 h-1 bg-yellow-600 mx-auto mb-6" />
        <p className="text-gray-600 max-w-3xl mx-auto">
          Join us for these special gatherings and community events.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Event 1 */}
        <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition flex flex-col md:flex-row">
          <div className="md:w-1/3 bg-green-800 text-white flex flex-col items-center justify-center p-6">
            <span className="text-4xl font-bold">10</span>
            <span className="text-xl">June</span>
            <span className="mt-2">9:00 AM</span>
          </div>
          <div className="md:w-2/3 p-6">
            <h3 className="text-xl font-bold mb-2">
              Summer Bible Study Kickoff
            </h3>
            <p className="text-gray-600 mb-4">
              Join us as we begin our summer study on the Book of Psalms. All
              ages welcome.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">
                <i className="fas fa-map-marker-alt mr-1" /> Main Sanctuary
              </span>
              <a href="#" className="text-green-700 hover:underline">
                More Info
              </a>
            </div>
          </div>
        </div>
        {/* Event 2 */}
        <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition flex flex-col md:flex-row">
          <div className="md:w-1/3 bg-yellow-600 text-white flex flex-col items-center justify-center p-6">
            <span className="text-4xl font-bold">15</span>
            <span className="text-xl">June</span>
            <span className="mt-2">6:00 PM</span>
          </div>
          <div className="md:w-2/3 p-6">
            <h3 className="text-xl font-bold mb-2">Youth Group Camping Trip</h3>
            <p className="text-gray-600 mb-4">
              Middle and high school students are invited for a weekend of fun,
              worship, and teaching.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">
                <i className="fas fa-map-marker-alt mr-1" /> Lakeview Campground
              </span>
              <a href="#" className="text-green-700 hover:underline">
                Register
              </a>
            </div>
          </div>
        </div>
        {/* Event 3 */}
        <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition flex flex-col md:flex-row">
          <div className="md:w-1/3 bg-green-800 text-white flex flex-col items-center justify-center p-6">
            <span className="text-4xl font-bold">22</span>
            <span className="text-xl">June</span>
            <span className="mt-2">7:00 PM</span>
          </div>
          <div className="md:w-2/3 p-6">
            <h3 className="text-xl font-bold mb-2">Men's Prayer Breakfast</h3>
            <p className="text-gray-600 mb-4">
              All men are invited for fellowship, prayer, and a hearty
              breakfast.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">
                <i className="fas fa-map-marker-alt mr-1" /> Fellowship Hall
              </span>
              <a href="#" className="text-green-700 hover:underline">
                RSVP
              </a>
            </div>
          </div>
        </div>
        {/* Event 4 */}
        <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition flex flex-col md:flex-row">
          <div className="md:w-1/3 bg-yellow-600 text-white flex flex-col items-center justify-center p-6">
            <span className="text-4xl font-bold">30</span>
            <span className="text-xl">June</span>
            <span className="mt-2">10:00 AM</span>
          </div>
          <div className="md:w-2/3 p-6">
            <h3 className="text-xl font-bold mb-2">Community Outreach Day</h3>
            <p className="text-gray-600 mb-4">
              Join us as we serve our local community through various service
              projects.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">
                <i className="fas fa-map-marker-alt mr-1" /> Meet at Church
              </span>
              <a href="#" className="text-green-700 hover:underline">
                Volunteer
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-12">
        <a
          href="#"
          className="inline-block bg-green-800 hover:bg-green-700 text-white px-6 py-3 rounded-md font-medium transition"
        >
          View Full Calendar
        </a>
      </div>
    </div>
  </section>
  {/* Ministries Section */}
  <section className="py-16 bg-gray-100">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="title-font text-3xl md:text-4xl font-bold text-green-800 mb-4">
          Our Ministries
        </h2>
        <div className="w-24 h-1 bg-yellow-600 mx-auto mb-6" />
        <p className="text-gray-600 max-w-3xl mx-auto">
          We have ministries for all ages and stages of life. Find your place to
          connect and grow.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Ministry 1 */}
        <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition text-center p-6">
          <img className="section-image" src="images/ghbc46.jpg" />
          <h3 className="text-xl font-bold mb-2">Children</h3>
          <p className="text-gray-600 mb-4">
            Ages 0-15. A fun, safe place where kids learn about Jesus through
            stories, songs, and activities. Growing in faith while having
            fun—every Sunday!.
          </p>
          <a href="#" className="text-green-700 hover:underline font-medium">
            Learn More
          </a>
        </div>
        {/* Ministry 2 */}
        <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition text-center p-6">
          <img className="section-image" src="images/ghbc13.jpg" />
          <h3 className="text-xl font-bold mb-2">Youth</h3>
          <p className="text-gray-600 mb-4">
            Empowering the next generation to live for Christ. Join us for fun,
            faith-filled gatherings, and real-life conversations.
          </p>
          <a href="#" className="text-green-700 hover:underline font-medium">
            Learn More
          </a>
        </div>
        {/* Ministry 3 */}
        <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition text-center p-6">
          <img className="section-image" src="images/ghbc.jpg" />
          <h3 className="text-xl font-bold mb-2">Adults</h3>
          <p className="text-gray-600 mb-4">
            Growing in faith, walking in purpose. Connect with others through
            worship, the Word, and meaningful fellowship.
          </p>
          <a href="#" className="text-green-700 hover:underline font-medium">
            Learn More
          </a>
        </div>
        {/* Ministry 4 */}
        <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition text-center p-6">
          <img className="section-image" src="images/ghbc30.jpg" />
          <h3 className="text-xl font-bold mb-2">Worship</h3>
          <p className="text-gray-600 mb-4">
            Lifting hearts through spirit-filled worship. Join the voices
            leading praise with passion and purpose.
          </p>
          <a href="#" className="text-green-700 hover:underline font-medium">
            Learn More
          </a>
        </div>
      </div>
    </div>
  </section>
  {/* Bible Verse of the Day */}
  <section className="py-16 bg-green-800 text-white">
    <div className="container mx-auto px-4 text-center">
      <div className="max-w-3xl mx-auto">
        <i className="fas fa-bible text-4xl mb-6" />
        <h2 className="title-font text-3xl md:text-4xl font-bold mb-6">
          Daily Bible Verse{" "}
        </h2>
        <p className="text-xl italic mb-6" id="bible-verse">
          “And he said, I will make all my goodness pass before thee, and I will
          proclaim the name of the Lord before thee; and will be gracious to
          whom I will be gracious, and will shew mercy on whom I will shew
          mercy.”
        </p>
        <p className="font-medium" id="bible-reference">
          Exodus 33:19
        </p>
      </div>
    </div>
  </section>
  {/* Giving Section */}
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="title-font text-3xl md:text-4xl font-bold text-green-800 mb-4">
            Give Generously
          </h2>
          <div className="w-24 h-1 bg-yellow-600 mb-6" />
          <p className="text-gray-600 mb-6">
            Your generous giving enables our church to fulfill its mission
            locally and globally. We believe giving is an act of worship that
            expresses our gratitude, faith, and love for others.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Online Giving</h3>
              <p className="text-gray-600 text-sm">
                Secure and convenient giving through our online portal.
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Text to Give</h3>
              <p className="text-gray-600 text-sm">
                Text "GIVE" to 12345 to donate via mobile.
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">In Person</h3>
              <p className="text-gray-600 text-sm">
                Give during Sunday services or at the church office.
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Mail a Check</h3>
              <p className="text-gray-600 text-sm">
                Send to: Great Harvest Bible Church, 16 Duke Town Close, State
                Housing Estate
              </p>
            </div>
          </div>
          <a
            href="#"
            className="inline-block bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-md font-medium transition"
          >
            Give Online Now
          </a>
        </div>
        <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
          <h3 className="text-xl font-bold mb-6 text-center">
            Give Securely Online
          </h3>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Amount</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-600">
                  ₦
                </span>
                <input
                  type="number"
                  className="w-full pl-8 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder={0.0}
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Frequency</label>
              <select className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500">
                <option>One-time</option>
                <option>Weekly</option>
                <option>Monthly</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Fund</label>
              <select className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500">
                <option>General Fund</option>
                <option>Missions</option>
                <option>Building Fund</option>
                <option>Benevolence</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-green-800 hover:bg-green-700 text-white py-2 rounded-md font-medium transition"
            >
              Continue to Payment
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
  {/* Newsletter */}
  <section className="py-16 bg-gray-100">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8 md:p-12">
        <div className="text-center mb-8">
          <h2 className="title-font text-3xl md:text-4xl font-bold text-green-800 mb-4">
            Stay Connected
          </h2>
          <div className="w-24 h-1 bg-yellow-600 mx-auto mb-6" />
          <p className="text-gray-600">
            Subscribe to our weekly newsletter for updates, devotionals, and
            church news.
          </p>
        </div>
        <form className="max-w-xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 mb-2">First Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Last Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email Address</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>
          <div className="mb-6">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox text-yellow-600"
              />
              <span className="ml-2 text-gray-700">
                I agree to receive emails from Grace Community Church
              </span>
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-600 hover:bg-yellow-700 text-white py-3 rounded-md font-medium transition"
          >
            Subscribe Now
          </button>
        </form>
      </div>
    </div>
  </section>
  {/* Footer */}
  <footer className="bg-green-900 text-white pt-16 pb-8">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        <div>
          <h3 className="title-font text-xl font-bold mb-4">
            Great Harvest Bible Church
          </h3>
          <p className="mb-4">
            A place to belong, believe, and become who God created you to be.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/share/1CZ9Vj7ZqS/"
              className="hover:text-yellow-300"
            >
              <i className="fab fa-facebook-f" />
            </a>
            <a
              href="https://www.facebook.com/share/1CZ9Vj7ZqS/"
              className="hover:text-yellow-300"
            >
              <i className="fab fa-instagram" />
            </a>
            <a
              href="https://www.facebook.com/share/1CZ9Vj7ZqS/"
              className="hover:text-yellow-300"
            >
              <i className="fab fa-youtube" />
            </a>
            <a
              href="https://www.facebook.com/share/1CZ9Vj7ZqS/"
              className="hover:text-yellow-300"
            >
              <i className="fab fa-twitter" />
            </a>
          </div>
        </div>
        <div>
          <h3 className="title-font text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-yellow-300 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-300 transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-300 transition">
                Sermons
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-300 transition">
                Events
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-300 transition">
                Ministries
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-300 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="title-font text-xl font-bold mb-4">Service Times</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <i className="fas fa-cross mt-1 mr-2 text-yellow-300" />
              <div>
                <p className="font-medium">Sunday Morning</p>
                <p className="text-sm">9:00 AM</p>
              </div>
            </li>
            <li className="flex items-start">
              <i className="fas fa-cross mt-1 mr-2 text-yellow-300" />
              <div>
                <p className="font-medium">Tuesday Evening</p>
                <p className="text-sm">5:00 PM Bible Study</p>
              </div>
            </li>
            <li className="flex items-start">
              <i className="fas fa-cross mt-1 mr-2 text-yellow-300" />
              <div>
                <p className="font-medium">Thursday Evening</p>
                <p className="text-sm">5:00 PM Healing Service</p>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="title-font text-xl font-bold mb-4">Contact Us</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <i className="fas fa-map-marker-alt mt-1 mr-2 text-yellow-300" />
              <p>16 Duke Town Close, State Housing Estate</p>
            </li>
            <li className="flex items-start">
              <i className="fas fa-phone-alt mt-1 mr-2 text-yellow-300" />
              <p>+234 803 669 4616</p>
            </li>
            <li className="flex items-start">
              <i className="fas fa-envelope mt-1 mr-2 text-yellow-300" />
              <p>info@gracecommunity.org</p>
            </li>
            <li className="flex items-start">
              <i className="fas fa-clock mt-1 mr-2 text-yellow-300" />
              <p>Office Hours: Open 24/7</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-green-800 pt-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p>© 2023 Grace Community Church. All Rights Reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-yellow-300">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-yellow-300">
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
  {/* Back to Top Button */}
  <button
    id="back-to-top"
    className="fixed bottom-6 right-6 bg-yellow-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg opacity-0 invisible transition-all"
  >
    <i className="fas fa-arrow-up" />
  </button>
  {/* WhatsApp Button */}
  <a
    href="https://wa.me/1234567890"
    className="fixed bottom-6 left-6 bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
  >
    <i className="fab fa-whatsapp text-xl" />
  </a>
  </>
  );
};
export default Home;