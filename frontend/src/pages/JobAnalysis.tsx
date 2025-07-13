
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { 
  ArrowUp,
  FileText,
  CheckCircle,
  XCircle,
  AlertCircle,
  Copy,
  Upload
} from 'lucide-react';
import Navbar from '@/components/Navbar';

const JobAnalysis = () => {
  const [jobDescription, setJobDescription] = useState('');
  const [analysis, setAnalysis] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const mockAnalysis = {
    jobTitle: 'Senior Frontend Developer',
    company: 'TechCorp Inc.',
    overallMatch: 72,
    requiredSkills: [
      { name: 'React', category: 'Frontend', hasSkill: true, importance: 'High' },
      { name: 'JavaScript', category: 'Programming', hasSkill: true, importance: 'High' },
      { name: 'TypeScript', category: 'Programming', hasSkill: false, importance: 'High' },
      { name: 'CSS/SCSS', category: 'Styling', hasSkill: true, importance: 'Medium' },
      { name: 'GraphQL', category: 'API', hasSkill: false, importance: 'Medium' },
      { name: 'Jest', category: 'Testing', hasSkill: true, importance: 'Medium' },
      { name: 'Docker', category: 'DevOps', hasSkill: false, importance: 'Low' },
      { name: 'AWS', category: 'Cloud', hasSkill: false, importance: 'Low' }
    ],
    softSkills: [
      { name: 'Team Leadership', hasSkill: true },
      { name: 'Communication', hasSkill: true },
      { name: 'Problem Solving', hasSkill: true },
      { name: 'Mentoring', hasSkill: false }
    ],
    experience: {
      required: '5+ years',
      userHas: '3 years',
      meets: false
    },
    education: {
      required: "Bachelor's in Computer Science or related field",
      userHas: "Bachelor's in Computer Science",
      meets: true
    }
  };

  const analyzeJob = () => {
    setIsAnalyzing(true);
    // Simulate API call
    setTimeout(() => {
      setAnalysis(mockAnalysis);
      setIsAnalyzing(false);
    }, 2000);
  };

  const getSkillIcon = (hasSkill: boolean) => {
    return hasSkill ? (
      <CheckCircle className="w-4 h-4 text-green-500" />
    ) : (
      <XCircle className="w-4 h-4 text-red-500" />
    );
  };

  const getImportanceColor = (importance: string) => {
    switch (importance) {
      case 'High':
        return 'bg-red-100 text-red-800';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'Low':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar 
        isAuthenticated={true} 
        user={{ name: 'John Doe' }}
        onSignOut={() => console.log('Sign out')}
      />
      
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Job Description Analysis
            </h1>
            <p className="text-muted-foreground">
              Paste a job description to get personalized insights and skill gap analysis.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="w-5 h-5 mr-2" />
                  Job Description Input
                </CardTitle>
                <CardDescription>
                  Copy and paste the job description you want to analyze
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="jobDescription">Job Description</Label>
                  <Textarea
                    id="jobDescription"
                    value={jobDescription}
                    onChange={(e) => setJobDescription(e.target.value)}
                    placeholder="Paste the job description here..."
                    rows={10}
                    className="mt-2"
                  />
                </div>
                
                <div className="flex gap-2">
                  <Button 
                    onClick={analyzeJob}
                    disabled={!jobDescription.trim() || isAnalyzing}
                    className="flex-1"
                  >
                    {isAnalyzing ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                        Analyzing...
                      </>
                    ) : (
                      <>
                        <ArrowUp className="w-4 h-4 mr-2" />
                        Analyze Job
                      </>
                    )}
                  </Button>
                  <Button variant="outline" size="icon">
                    <Upload className="w-4 h-4" />
                  </Button>
                </div>

                <div className="text-xs text-muted-foreground">
                  💡 Tip: Include the complete job description for the most accurate analysis
                </div>
              </CardContent>
            </Card>

            {/* Results Section */}
            {analysis && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Analysis Results</span>
                    <Badge 
                      variant={analysis.overallMatch > 70 ? 'default' : 'secondary'}
                      className="text-lg px-3 py-1"
                    >
                      {analysis.overallMatch}% Match
                    </Badge>
                  </CardTitle>
                  <CardDescription>
                    {analysis.jobTitle} at {analysis.company}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Overall Progress */}
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Overall Qualification</span>
                      <span>{analysis.overallMatch}%</span>
                    </div>
                    <Progress value={analysis.overallMatch} className="h-2" />
                  </div>

                  <Separator />

                  {/* Experience & Education */}
                  <div className="space-y-3">
                    <h3 className="font-semibold">Requirements Check</h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                        <div>
                          <p className="font-medium">Experience</p>
                          <p className="text-sm text-muted-foreground">
                            Required: {analysis.experience.required} | You have: {analysis.experience.userHas}
                          </p>
                        </div>
                        {analysis.experience.meets ? (
                          <CheckCircle className="w-5 h-5 text-green-500" />
                        ) : (
                          <AlertCircle className="w-5 h-5 text-yellow-500" />
                        )}
                      </div>
                      
                      <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                        <div>
                          <p className="font-medium">Education</p>
                          <p className="text-sm text-muted-foreground">
                            {analysis.education.required}
                          </p>
                        </div>
                        {analysis.education.meets ? (
                          <CheckCircle className="w-5 h-5 text-green-500" />
                        ) : (
                          <XCircle className="w-5 h-5 text-red-500" />
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Detailed Skills Analysis */}
          {analysis && (
            <div className="mt-8 space-y-6">
              {/* Technical Skills */}
              <Card>
                <CardHeader>
                  <CardTitle>Technical Skills Analysis</CardTitle>
                  <CardDescription>
                    Skills breakdown by category and importance level
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {analysis.requiredSkills.map((skill, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center space-x-3">
                          {getSkillIcon(skill.hasSkill)}
                          <div>
                            <p className="font-medium">{skill.name}</p>
                            <p className="text-sm text-muted-foreground">{skill.category}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge 
                            variant="outline" 
                            className={getImportanceColor(skill.importance)}
                          >
                            {skill.importance}
                          </Badge>
                          {!skill.hasSkill && (
                            <Button size="sm" variant="outline">
                              Learn
                            </Button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Soft Skills */}
              <Card>
                <CardHeader>
                  <CardTitle>Soft Skills Assessment</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {analysis.softSkills.map((skill, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center space-x-3">
                          {getSkillIcon(skill.hasSkill)}
                          <span className="font-medium">{skill.name}</span>
                        </div>
                        {!skill.hasSkill && (
                          <Button size="sm" variant="outline">
                            Develop
                          </Button>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recommendations */}
              <Card>
                <CardHeader>
                  <CardTitle>Next Steps</CardTitle>
                  <CardDescription>
                    Recommended actions to improve your qualification for this role
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                      <h3 className="font-semibold text-blue-900 mb-2">Priority Learning</h3>
                      <p className="text-blue-800 text-sm mb-3">
                        Focus on these high-importance skills first
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {analysis.requiredSkills
                          .filter(skill => !skill.hasSkill && skill.importance === 'High')
                          .map((skill, index) => (
                            <Badge key={index} variant="secondary">
                              {skill.name}
                            </Badge>
                          ))}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Button className="h-20 flex-col">
                        <ArrowUp className="w-6 h-6 mb-2" />
                        View Learning Resources
                      </Button>
                      <Button variant="outline" className="h-20 flex-col">
                        <Copy className="w-6 h-6 mb-2" />
                        Save Analysis
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobAnalysis;
