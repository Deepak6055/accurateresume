
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { 
  BookOpen, 
  User, 
  ArrowUp, 
  Book,
  Plus,
  TrendingUp,
  Target,
  Clock
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';

const Dashboard = () => {
  // Mock user data
  const [user] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    profileCompletion: 85,
    skillsAnalyzed: 12,
    projectsCompleted: 3,
    coursesInProgress: 2
  });

  const recentAnalyses = [
    {
      id: 1,
      jobTitle: 'Senior Frontend Developer',
      company: 'TechCorp',
      matchPercentage: 78,
      missingSkills: ['TypeScript', 'GraphQL'],
      date: '2 days ago'
    },
    {
      id: 2,
      jobTitle: 'Full Stack Engineer',
      company: 'StartupXYZ', 
      matchPercentage: 65,
      missingSkills: ['Docker', 'AWS', 'Node.js'],
      date: '1 week ago'
    }
  ];

  const recommendedProjects = [
    {
      id: 1,
      title: 'E-commerce Dashboard with TypeScript',
      skills: ['TypeScript', 'React', 'Charts'],
      difficulty: 'Intermediate',
      estimatedTime: '2-3 weeks'
    },
    {
      id: 2,
      title: 'Real-time Chat App with GraphQL',
      skills: ['GraphQL', 'WebSockets', 'Node.js'],
      difficulty: 'Advanced',
      estimatedTime: '3-4 weeks'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar 
        isAuthenticated={true} 
        user={{ name: user.name }}
        onSignOut={() => console.log('Sign out')}
      />
      
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Welcome Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Welcome back, {user.name}! 👋
            </h1>
            <p className="text-muted-foreground">
              Here's your career progress and personalized recommendations.
            </p>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Profile Completion</p>
                    <p className="text-2xl font-bold">{user.profileCompletion}%</p>
                  </div>
                  <User className="w-8 h-8 text-primary" />
                </div>
                <Progress value={user.profileCompletion} className="mt-2" />
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Jobs Analyzed</p>
                    <p className="text-2xl font-bold">{user.skillsAnalyzed}</p>
                  </div>
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Projects Built</p>
                    <p className="text-2xl font-bold">{user.projectsCompleted}</p>
                  </div>
                  <Target className="w-8 h-8 text-primary" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Active Courses</p>
                    <p className="text-2xl font-bold">{user.coursesInProgress}</p>
                  </div>
                  <BookOpen className="w-8 h-8 text-primary" />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Recent Job Analyses */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center">
                      <ArrowUp className="w-5 h-5 mr-2" />
                      Recent Job Analyses
                    </CardTitle>
                    <CardDescription>
                      Your latest job description assessments
                    </CardDescription>
                  </div>
                  <Link to="/analyze">
                    <Button size="sm">
                      <Plus className="w-4 h-4 mr-2" />
                      Analyze New Job
                    </Button>
                  </Link>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentAnalyses.map((analysis) => (
                  <div key={analysis.id} className="border rounded-lg p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-semibold">{analysis.jobTitle}</h3>
                        <p className="text-sm text-muted-foreground">{analysis.company}</p>
                      </div>
                      <Badge variant={analysis.matchPercentage > 70 ? 'default' : 'secondary'}>
                        {analysis.matchPercentage}% match
                      </Badge>
                    </div>
                    <div className="mb-2">
                      <p className="text-sm text-muted-foreground">Missing skills:</p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {analysis.missingSkills.map((skill) => (
                          <Badge key={skill} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Clock className="w-3 h-3 mr-1" />
                      {analysis.date}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Recommended Projects */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Book className="w-5 h-5 mr-2" />
                  Recommended Projects
                </CardTitle>
                <CardDescription>
                  Build these projects to strengthen your portfolio
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {recommendedProjects.map((project) => (
                  <div key={project.id} className="border rounded-lg p-4">
                    <h3 className="font-semibold mb-2">{project.title}</h3>
                    <div className="mb-2">
                      <p className="text-sm text-muted-foreground">Skills you'll practice:</p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {project.skills.map((skill) => (
                          <Badge key={skill} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>{project.difficulty}</span>
                      <span>{project.estimatedTime}</span>
                    </div>
                    <Button size="sm" className="w-full mt-3">
                      Start Project
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>
                Jump back into your career development journey
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link to="/analyze">
                  <Button variant="outline" className="w-full h-20 flex-col">
                    <ArrowUp className="w-6 h-6 mb-2" />
                    Analyze Job Description
                  </Button>
                </Link>
                <Button variant="outline" className="w-full h-20 flex-col">
                  <Book className="w-6 h-6 mb-2" />
                  Browse Projects
                </Button>
                <Button variant="outline" className="w-full h-20 flex-col">
                  <BookOpen className="w-6 h-6 mb-2" />
                  Continue Learning
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
