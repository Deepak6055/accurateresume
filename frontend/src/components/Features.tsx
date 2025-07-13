
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  BookOpen, 
  User, 
  ArrowUp, 
  Book 
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: User,
      title: "Smart Job Analysis",
      description: "Upload any job description and get instant analysis of required skills, technologies, and qualifications."
    },
    {
      icon: ArrowUp,
      title: "Skill Gap Assessment",
      description: "Discover exactly which skills you need to develop to qualify for your target positions."
    },
    {
      icon: Book,
      title: "Personalized Projects",
      description: "Get custom project recommendations that align with your career goals and showcase the right skills."
    },
    {
      icon: BookOpen,
      title: "Soft Skills Development",
      description: "Access curated video courses to develop communication, leadership, and other essential soft skills."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Everything You Need to Succeed
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our comprehensive platform provides personalized guidance at every step of your career journey.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-muted-foreground">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
