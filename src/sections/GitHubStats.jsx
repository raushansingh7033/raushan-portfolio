import { motion } from "framer-motion";

const GitHubStats = () => {
  const githubUsername = "raushansingh7033";

  return (
    <section
      id="github-stats"
      className="py-20 bg-white dark:bg-dark-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            GitHub Contributions
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            My open-source activity and consistent coding practice
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
          {/* Contribution Graph */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-700 rounded-2xl shadow-lg p-6"
          >
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
              Contribution Activity
            </h3>
            <img
              src="https://github-readme-stats.vercel.app/api?username=raushansingh7033&theme=react&hide_border=true"
              onError={(e) => {
                e.target.src = "/github-fallback.png";
              }}
              alt="GitHub contribution graph"
              className="w-full"
              loading="lazy"
            />
          </motion.div>

          {/* Streak */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-700 rounded-2xl shadow-lg p-6"
          >
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
              Contribution Streak
            </h3>
            <img
              src={`https://github-readme-streak-stats.herokuapp.com/?user=${githubUsername}&theme=react&hide_border=true`}
              alt="GitHub contribution streak"
              className="w-full"
              loading="lazy"
            />
          </motion.div>
        </div>

        {/* Profile Button */}
        <div className="text-center mt-12">
          <a
            href={`https://github.com/${githubUsername}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition"
          >
            View My GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default GitHubStats;
