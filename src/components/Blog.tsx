import { Button } from "@/components/ui/button";

export default function Blog() {
  const blogPosts = [
    {
      title: "The Future of Web Development",
      excerpt:
        "Explore the latest trends and technologies shaping the future of web development.",
      image: "/webdev.jpg",
    },
    {
      title: "Mastering React Hooks",
      excerpt:
        "Learn how to leverage the power of React Hooks to build efficient and scalable applications.",
      image: "/devops.jpg",
    },
    {
      title: "The Art of UI Design",
      excerpt:
        "Discover the principles and techniques behind creating stunning user interfaces.",
      image: "/uiux.jpg",
    },
    {
      title: "Optimizing Website Performance",
      excerpt:
        "Tips and tricks to boost your website's speed and overall performance.",
      image: "/perform.jpg",
    },
  ];

  return (
    <section className="bg-purple-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-purple-800 mb-8 text-center">
          Latest Blog Posts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-purple-900 mb-2">
                  {post.title}
                </h3>
                <p className="text-purple-700 mb-4">{post.excerpt}</p>
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                  Read More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
