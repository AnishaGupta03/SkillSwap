import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaSearch, 
  FaFilter, 
  FaStar, 
  FaUser, 
  FaMapMarkerAlt,
  FaGraduationCap,
  FaPlus
} from 'react-icons/fa';
import axios from 'axios';

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'technology', name: 'Technology' },
    { id: 'business', name: 'Business' },
    { id: 'creative', name: 'Creative Arts' },
    { id: 'language', name: 'Languages' },
    { id: 'fitness', name: 'Health & Fitness' },
    { id: 'cooking', name: 'Cooking' },
    { id: 'music', name: 'Music' }
  ];

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        // In a real app, you'd fetch from your API
        // For now, using mock data
        const mockSkills = [
          {
            id: 1,
            title: 'Web Development',
            description: 'Learn HTML, CSS, JavaScript, and modern frameworks like React and Node.js',
            category: 'technology',
            instructor: {
              name: 'Sarah Johnson',
              rating: 4.8,
              location: 'San Francisco, CA'
            },
            price: 'Free',
            duration: '2 hours',
            level: 'Beginner',
            image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400'
          },
          {
            id: 2,
            title: 'Public Speaking',
            description: 'Master the art of public speaking and presentation skills',
            category: 'business',
            instructor: {
              name: 'Mike Chen',
              rating: 4.9,
              location: 'New York, NY'
            },
            price: 'Free',
            duration: '1.5 hours',
            level: 'Intermediate',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400'
          },
          {
            id: 3,
            title: 'Digital Marketing',
            description: 'Learn SEO, social media marketing, and content strategy',
            category: 'business',
            instructor: {
              name: 'Emma Davis',
              rating: 4.7,
              location: 'Los Angeles, CA'
            },
            price: 'Free',
            duration: '3 hours',
            level: 'Beginner',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400'
          },
          {
            id: 4,
            title: 'Spanish Conversation',
            description: 'Practice conversational Spanish with native speakers',
            category: 'language',
            instructor: {
              name: 'Maria Rodriguez',
              rating: 4.6,
              location: 'Miami, FL'
            },
            price: 'Free',
            duration: '1 hour',
            level: 'All Levels',
            image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=400'
          },
          {
            id: 5,
            title: 'Guitar Basics',
            description: 'Learn basic guitar chords and strumming patterns',
            category: 'music',
            instructor: {
              name: 'Alex Thompson',
              rating: 4.5,
              location: 'Austin, TX'
            },
            price: 'Free',
            duration: '2 hours',
            level: 'Beginner',
            image: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=400'
          },
          {
            id: 6,
            title: 'Yoga & Meditation',
            description: 'Learn yoga poses and meditation techniques for beginners',
            category: 'fitness',
            instructor: {
              name: 'Lisa Wang',
              rating: 4.9,
              location: 'Portland, OR'
            },
            price: 'Free',
            duration: '1.5 hours',
            level: 'Beginner',
            image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400'
          }
        ];
        
        setSkills(mockSkills);
      } catch (error) {
        console.error('Error fetching skills:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);

  const filteredSkills = skills.filter(skill => {
    const matchesSearch = skill.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         skill.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         skill.instructor.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || skill.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getLevelColor = (level) => {
    switch (level.toLowerCase()) {
      case 'beginner':
        return 'bg-green-100 text-green-800';
      case 'intermediate':
        return 'bg-yellow-100 text-yellow-800';
      case 'advanced':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Browse Skills</h1>
              <p className="text-gray-600">
                Discover skills from our community and start learning today
              </p>
            </div>
            <Link
              to="/skills/create"
              className="mt-4 md:mt-0 inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <FaPlus className="mr-2" />
              Add Your Skill
            </Link>
          </div>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8"
        >
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-4">
              {/* Search */}
              <div className="flex-1 mb-4 lg:mb-0">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaSearch className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search skills, instructors, or topics..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div className="flex items-center space-x-4">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Results Count */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-6"
        >
          <p className="text-gray-600">
            Showing {filteredSkills.length} skill{filteredSkills.length !== 1 ? 's' : ''}
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Skill Image */}
              <div className="h-48 bg-gray-200 relative overflow-hidden">
                <img
                  src={skill.image}
                  alt={skill.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 right-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(skill.level)}`}>
                    {skill.level}
                  </span>
                </div>
              </div>

              {/* Skill Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {skill.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {skill.description}
                </p>

                {/* Instructor Info */}
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <FaUser className="h-4 w-4 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{skill.instructor.name}</p>
                    <div className="flex items-center text-sm text-gray-600">
                      <FaStar className="h-3 w-3 text-yellow-400 mr-1" />
                      <span>{skill.instructor.rating}</span>
                      <FaMapMarkerAlt className="h-3 w-3 ml-2 mr-1" />
                      <span>{skill.instructor.location}</span>
                    </div>
                  </div>
                </div>

                {/* Skill Details */}
                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                  <div className="flex items-center">
                    <FaGraduationCap className="h-4 w-4 mr-1" />
                    <span>{skill.duration}</span>
                  </div>
                  <span className="font-medium text-green-600">{skill.price}</span>
                </div>

                {/* Action Button */}
                <Link
                  to={`/skills/${skill.id}`}
                  className="block w-full text-center bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  View Details
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredSkills.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center py-12"
          >
            <FaSearch className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No skills found</h3>
            <p className="text-gray-600 mb-4">
              Try adjusting your search terms or filters
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Clear all filters
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Skills; 