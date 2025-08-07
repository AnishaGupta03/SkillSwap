import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaStar, 
  FaUser, 
  FaMapMarkerAlt, 
  FaClock, 
  FaGraduationCap,
  FaCalendarAlt,
  FaPhone,
  FaEnvelope,
  FaHeart,
  FaShare,
  FaArrowLeft
} from 'react-icons/fa';

const SkillDetail = () => {
  const { id } = useParams();
  const [skill, setSkill] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const fetchSkillDetail = async () => {
      try {
        // Mock data for skill detail
        const mockSkill = {
          id: parseInt(id),
          title: 'Web Development Fundamentals',
          description: 'Learn the essential skills needed to become a web developer. This comprehensive course covers HTML, CSS, JavaScript, and modern web development practices. Perfect for beginners who want to start their journey in web development.',
          category: 'Technology',
          level: 'Beginner',
          duration: '2 hours',
          price: 'Free',
          instructor: {
            name: 'Sarah Johnson',
            avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150',
            rating: 4.8,
            location: 'San Francisco, CA',
            bio: 'Full-stack developer with 8+ years of experience. Passionate about teaching and helping others learn web development. I\'ve helped over 200 students start their careers in tech.',
            skills: ['JavaScript', 'React', 'Node.js', 'Python', 'AWS'],
            completedSessions: 156,
            students: 89
          },
          image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800',
          topics: [
            'HTML Structure and Semantics',
            'CSS Styling and Layout',
            'JavaScript Basics',
            'Responsive Design',
            'Web Development Tools'
          ],
          reviews: [
            {
              id: 1,
              user: 'Mike Chen',
              avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
              rating: 5,
              comment: 'Excellent session! Sarah explained complex concepts in a very clear way. Highly recommended for beginners.',
              date: '2024-01-15'
            },
            {
              id: 2,
              user: 'Emma Davis',
              avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
              rating: 4,
              comment: 'Great introduction to web development. Sarah is very patient and knowledgeable.',
              date: '2024-01-10'
            },
            {
              id: 3,
              user: 'Alex Wilson',
              avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
              rating: 5,
              comment: 'Perfect for someone starting their web development journey. Clear explanations and practical examples.',
              date: '2024-01-08'
            }
          ]
        };
        
        setSkill(mockSkill);
      } catch (error) {
        console.error('Error fetching skill detail:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSkillDetail();
  }, [id]);

  const averageRating = skill?.reviews.reduce((acc, review) => acc + review.rating, 0) / skill?.reviews.length || 0;

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!skill) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Skill not found</h2>
          <p className="text-gray-600 mb-4">The skill you're looking for doesn't exist.</p>
          <Link
            to="/skills"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <FaArrowLeft className="mr-2" />
            Back to Skills
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <Link
            to="/skills"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors"
          >
            <FaArrowLeft className="mr-2" />
            Back to Skills
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2"
          >
            {/* Skill Image */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-6">
              <img
                src={skill.image}
                alt={skill.title}
                className="w-full h-64 object-cover"
              />
            </div>

            {/* Skill Information */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{skill.title}</h1>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                      {skill.category}
                    </span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full">
                      {skill.level}
                    </span>
                    <div className="flex items-center">
                      <FaClock className="mr-1" />
                      <span>{skill.duration}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setIsFavorite(!isFavorite)}
                    className={`p-2 rounded-lg transition-colors ${
                      isFavorite ? 'text-red-500 bg-red-50' : 'text-gray-400 hover:text-red-500 hover:bg-red-50'
                    }`}
                  >
                    <FaHeart className="h-5 w-5" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
                    <FaShare className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">{skill.description}</p>

              {/* Topics Covered */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">What you'll learn</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {skill.topics.map((topic, index) => (
                    <div key={index} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Reviews */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Reviews</h3>
                <div className="flex items-center">
                  <div className="flex items-center mr-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <FaStar
                        key={star}
                        className={`h-4 w-4 ${
                          star <= averageRating ? 'text-yellow-400' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    {averageRating.toFixed(1)} ({skill.reviews.length} reviews)
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                {skill.reviews.map((review) => (
                  <div key={review.id} className="border-b border-gray-100 pb-4 last:border-b-0">
                    <div className="flex items-start space-x-3">
                      <img
                        src={review.avatar}
                        alt={review.user}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-medium text-gray-900">{review.user}</h4>
                          <div className="flex items-center">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <FaStar
                                key={star}
                                className={`h-3 w-3 ${
                                  star <= review.rating ? 'text-yellow-400' : 'text-gray-300'
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                        <p className="text-gray-600 text-sm mb-1">{review.comment}</p>
                        <span className="text-xs text-gray-500">{review.date}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Booking Card */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-6">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-green-600 mb-2">{skill.price}</div>
                <p className="text-gray-600">per session</p>
              </div>

              <div className="space-y-4">
                <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                  <FaCalendarAlt className="inline mr-2" />
                  Schedule Session
                </button>
                <button className="w-full border border-blue-600 text-blue-600 py-3 px-4 rounded-lg hover:bg-blue-50 transition-colors font-medium">
                  <FaPhone className="inline mr-2" />
                  Contact Instructor
                </button>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Duration:</span>
                  <span className="font-medium">{skill.duration}</span>
                </div>
                <div className="flex items-center justify-between text-sm mt-2">
                  <span className="text-gray-600">Level:</span>
                  <span className="font-medium">{skill.level}</span>
                </div>
                <div className="flex items-center justify-between text-sm mt-2">
                  <span className="text-gray-600">Category:</span>
                  <span className="font-medium">{skill.category}</span>
                </div>
              </div>
            </div>

            {/* Instructor Card */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="text-center mb-4">
                <img
                  src={skill.instructor.avatar}
                  alt={skill.instructor.name}
                  className="w-20 h-20 rounded-full object-cover mx-auto mb-3"
                />
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{skill.instructor.name}</h3>
                <div className="flex items-center justify-center mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar
                      key={star}
                      className={`h-4 w-4 ${
                        star <= skill.instructor.rating ? 'text-yellow-400' : 'text-gray-300'
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">{skill.instructor.rating}</span>
                </div>
                <div className="flex items-center justify-center text-sm text-gray-600 mb-3">
                  <FaMapMarkerAlt className="mr-1" />
                  {skill.instructor.location}
                </div>
              </div>

              <p className="text-gray-700 text-sm mb-4">{skill.instructor.bio}</p>

              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Completed Sessions:</span>
                  <span className="font-medium">{skill.instructor.completedSessions}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Students:</span>
                  <span className="font-medium">{skill.instructor.students}</span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-200">
                <h4 className="text-sm font-medium text-gray-900 mb-2">Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {skill.instructor.skills.map((skillName, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                    >
                      {skillName}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-4 space-y-2">
                <button className="w-full flex items-center justify-center px-3 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                  <FaEnvelope className="mr-2" />
                  Send Message
                </button>
                <button className="w-full flex items-center justify-center px-3 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                  <FaPhone className="mr-2" />
                  Call Instructor
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SkillDetail; 