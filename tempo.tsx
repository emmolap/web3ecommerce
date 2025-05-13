// HOME START

import React from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, Heart, User, Search, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "./ui/carousel";
import ProjectList from "./ProjectList";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  // Featured products data
  const featuredProducts = [
    {
      id: 1,
      name: "Summer Collection",
      image:
        "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800&q=80",
      price: "$129.99",
    },
    {
      id: 2,
      name: "Winter Essentials",
      image:
        "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80",
      price: "$149.99",
    },
    {
      id: 3,
      name: "Casual Wear",
      image:
        "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?w=800&q=80",
      price: "$89.99",
    },
    {
      id: 4,
      name: "Formal Collection",
      image:
        "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=800&q=80",
      price: "$199.99",
    },
  ];

  // Categories data
  const categories = [
    {
      id: 1,
      name: "Women",
      image:
        "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=800&q=80",
    },
    {
      id: 2,
      name: "Men",
      image:
        "https://images.unsplash.com/photo-1516826957135-700dedea698c?w=800&q=80",
    },
    {
      id: 3,
      name: "Kids",
      image:
        "https://images.unsplash.com/photo-1518831959646-28f9c5c381d9?w=800&q=80",
    },
    {
      id: 4,
      name: "Accessories",
      image:
        "https://images.unsplash.com/photo-1576053139778-7e32f2ae3cfd?w=800&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link to="/" className="text-2xl font-bold">
              FashionStore
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <Link
                to="/products"
                className="text-sm font-medium hover:text-primary"
              >
                Products
              </Link>
              <Link
                to="/categories"
                className="text-sm font-medium hover:text-primary"
              >
                Categories
              </Link>
              <Link
                to="/new-arrivals"
                className="text-sm font-medium hover:text-primary"
              >
                New Arrivals
              </Link>
              <Link
                to="/sale"
                className="text-sm font-medium hover:text-primary"
              >
                Sale
              </Link>
              <Link
                to="/contact"
                className="text-sm font-medium hover:text-primary"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Action Icons */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" asChild>
              <Link to="/search">
                <Search className="h-5 w-5" />
                <span className="sr-only">Search</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link to="/wishlist">
                <Heart className="h-5 w-5" />
                <span className="sr-only">Wishlist</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link to="/cart">
                <ShoppingBag className="h-5 w-5" />
                <span className="sr-only">Cart</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link to="/profile">
                <User className="h-5 w-5" />
                <span className="sr-only">Profile</span>
              </Link>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
              <span className="sr-only">Menu</span>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t p-4">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/products"
                className="text-sm font-medium hover:text-primary"
              >
                Products
              </Link>
              <Link
                to="/categories"
                className="text-sm font-medium hover:text-primary"
              >
                Categories
              </Link>
              <Link
                to="/new-arrivals"
                className="text-sm font-medium hover:text-primary"
              >
                New Arrivals
              </Link>
              <Link
                to="/sale"
                className="text-sm font-medium hover:text-primary"
              >
                Sale
              </Link>
              <Link
                to="/contact"
                className="text-sm font-medium hover:text-primary"
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative h-[600px] overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&q=80"
              alt="Fashion hero"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
          <div className="container relative z-10 flex h-full flex-col justify-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Summer Collection 2023
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-lg">
              Discover the latest trends and styles for the season. Shop now for
              exclusive deals.
            </p>
            <div className="flex gap-4">
              <Button size="lg" asChild>
                <Link to="/products">Shop Now</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white/10"
                asChild
              >
                <Link to="/new-arrivals">New Arrivals</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16 container">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Shop by Category
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link
                to={`/categories/${category.id}`}
                key={category.id}
                className="group relative overflow-hidden rounded-lg"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-bold">
                    {category.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Featured Products Carousel */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Featured Products
            </h2>
            <Carousel className="w-full">
              <CarouselContent>
                {featuredProducts.map((product) => (
                  <CarouselItem
                    key={product.id}
                    className="md:basis-1/2 lg:basis-1/3"
                  >
                    <Card className="overflow-hidden">
                      <div className="aspect-square overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-semibold text-lg">
                          {product.name}
                        </h3>
                        <p className="text-primary font-medium">
                          {product.price}
                        </p>
                        <Button
                          className="w-full mt-2"
                          variant="outline"
                          asChild
                        >
                          <Link to={`/products/${product.id}`}>
                            View Details
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="-left-4" />
              <CarouselNext className="-right-4" />
            </Carousel>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 container">
          <div className="bg-primary/10 rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="mb-6 max-w-lg mx-auto">
              Stay updated with the latest fashion trends, new arrivals, and
              exclusive offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </section>

        {/* Project List Section (from the original spec) */}
        <section className="py-16 container">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Your Projects</h2>
            <Button asChild>
              <Link to="/create-project">Create New Project</Link>
            </Button>
          </div>
          <ProjectList />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-muted py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">FashionStore</h3>
              <p className="text-muted-foreground">
                Your one-stop destination for all fashion needs.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Shop</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/products"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    All Products
                  </Link>
                </li>
                <li>
                  <Link
                    to="/new-arrivals"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    New Arrivals
                  </Link>
                </li>
                <li>
                  <Link
                    to="/sale"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Sale
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Account</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/profile"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    My Account
                  </Link>
                </li>
                <li>
                  <Link
                    to="/orders"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Orders
                  </Link>
                </li>
                <li>
                  <Link
                    to="/wishlist"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Wishlist
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/contact"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/faq"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    to="/privacy-policy"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>
              &copy; {new Date().getFullYear()} FashionStore. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
// HOME ENDS

PROJECT CARD
import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Edit, Trash2, UserPlus, Calendar } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface TeamMember {
  id: string;
  name: string;
  role?: string;
}

interface ProjectCardProps {
  id: string;
  name: string;
  description: string;
  teamMembers: TeamMember[];
  lastUpdated: string;
  priority?: "low" | "medium" | "high";
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
  onAddMember?: (id: string) => void;
}

const ProjectCard = ({
  id = "project-1",
  name = "Sample Project",
  description = "This is a sample project description that showcases what this project is about.",
  teamMembers = [
    { id: "1", name: "John Doe", role: "Project Manager" },
    { id: "2", name: "Jane Smith", role: "Developer" },
  ],
  lastUpdated = "2023-05-15",
  priority = "medium",
  onEdit = () => {},
  onDelete = () => {},
  onAddMember = () => {},
}: ProjectCardProps) => {
  const priorityColors = {
    low: "bg-green-100 text-green-800",
    medium: "bg-yellow-100 text-yellow-800",
    high: "bg-red-100 text-red-800",
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <Card className="w-full max-w-md bg-white overflow-hidden transition-shadow hover:shadow-lg">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl font-bold">{name}</CardTitle>
          <Badge className={priorityColors[priority]}>{priority}</Badge>
        </div>
      </CardHeader>

      <CardContent>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>

        <div className="flex items-center mb-4">
          <Calendar className="h-4 w-4 mr-2 text-gray-500" />
          <span className="text-xs text-gray-500">
            Last updated: {formatDate(lastUpdated)}
          </span>
        </div>

        <div className="flex items-center">
          <div className="flex -space-x-2 mr-2">
            {teamMembers.slice(0, 3).map((member) => (
              <Avatar key={member.id} className="border-2 border-white h-8 w-8">
                <AvatarFallback className="bg-primary/10 text-xs">
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
            ))}
            {teamMembers.length > 3 && (
              <Avatar className="border-2 border-white h-8 w-8">
                <AvatarFallback className="bg-gray-200 text-xs">
                  +{teamMembers.length - 3}
                </AvatarFallback>
              </Avatar>
            )}
          </div>
          <span className="text-sm text-gray-600">
            {teamMembers.length} team member
            {teamMembers.length !== 1 ? "s" : ""}
          </span>
        </div>
      </CardContent>

      <CardFooter className="flex justify-end gap-2 pt-2 border-t">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="icon" onClick={() => onEdit(id)}>
                <Edit className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Edit project</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                onClick={() => onDelete(id)}
              >
                <Trash2 className="h-4 w-4 text-red-500" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Delete project</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                onClick={() => onAddMember(id)}
              >
                <UserPlus className="h-4 w-4 text-blue-500" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Add team member</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;

PROJECT FORM
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { format } from "date-fns";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Project name must be at least 2 characters." }),
  description: z
    .string()
    .min(10, { message: "Description must be at least 10 characters." }),
  startDate: z.date({ required_error: "Start date is required." }),
  endDate: z.date({ required_error: "End date is required." }).optional(),
  priority: z.string({ required_error: "Priority is required." }),
});

type FormValues = z.infer<typeof formSchema>;

interface ProjectFormProps {
  initialValues?: FormValues;
  onSubmit: (data: FormValues) => void;
  onCancel?: () => void;
  isEditing?: boolean;
}

const ProjectForm = ({
  initialValues = {
    name: "",
    description: "",
    startDate: new Date(),
    priority: "medium",
  },
  onSubmit,
  onCancel,
  isEditing = false,
}: ProjectFormProps) => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: initialValues,
  });

  const handleSubmit = (data: FormValues) => {
    onSubmit(data);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">
        {isEditing ? "Edit Project" : "Create New Project"}
      </h2>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Project Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter project name" {...field} />
                </FormControl>
                <FormDescription>The name of your project.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Enter project description"
                    className="min-h-[120px]"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Describe what this project is about.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="startDate"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Start Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground",
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormDescription>
                    When does the project start?
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="endDate"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>End Date (Optional)</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground",
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormDescription>
                    When is the project expected to end?
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="priority"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Priority Level</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select priority level" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="low">Low</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                    <SelectItem value="urgent">Urgent</SelectItem>
                  </SelectContent>
                </Select>
                <FormDescription>
                  Set the priority level for this project.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex justify-end space-x-4 pt-4">
            {onCancel && (
              <Button type="button" variant="outline" onClick={onCancel}>
                Cancel
              </Button>
            )}
            <Button type="submit">
              {isEditing ? "Update Project" : "Create Project"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ProjectForm;

PROJECT LIST
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import ProjectCard from "./ProjectCard";

interface Project {
  id: string;
  name: string;
  description: string;
  teamSize: number;
  lastUpdated: string;
}

interface ProjectListProps {
  projects?: Project[];
  onEdit?: (project: Project) => void;
  onDelete?: (projectId: string) => void;
  onAddMember?: (projectId: string) => void;
}

const ProjectList = ({
  projects = [
    {
      id: "1",
      name: "E-commerce Website Redesign",
      description:
        "Redesigning the company website with modern UI/UX principles",
      teamSize: 5,
      lastUpdated: "2023-06-15",
    },
    {
      id: "2",
      name: "Mobile App Development",
      description: "Creating a native mobile app for iOS and Android platforms",
      teamSize: 8,
      lastUpdated: "2023-07-22",
    },
    {
      id: "3",
      name: "Marketing Campaign",
      description:
        "Planning and executing Q3 marketing campaign across digital channels",
      teamSize: 4,
      lastUpdated: "2023-08-05",
    },
    {
      id: "4",
      name: "Database Migration",
      description: "Migrating from legacy database to cloud-based solution",
      teamSize: 3,
      lastUpdated: "2023-08-12",
    },
    {
      id: "5",
      name: "Customer Support Portal",
      description:
        "Building a self-service portal for customer inquiries and support tickets",
      teamSize: 6,
      lastUpdated: "2023-07-30",
    },
    {
      id: "6",
      name: "Internal Training Program",
      description: "Developing training materials for new employee onboarding",
      teamSize: 2,
      lastUpdated: "2023-08-18",
    },
  ],
  onEdit = () => {},
  onDelete = () => {},
  onAddMember = () => {},
}: ProjectListProps) => {
  return (
    <div className="bg-white w-full p-6">
      <h2 className="text-2xl font-bold mb-6">Your Projects</h2>

      {projects.length === 0 ? (
        <Card className="w-full">
          <CardContent className="p-6 flex flex-col items-center justify-center h-40">
            <p className="text-gray-500 text-lg">No projects found</p>
            <p className="text-gray-400 text-sm mt-2">
              Create a new project to get started
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onEdit={() => onEdit(project)}
              onDelete={() => onDelete(project.id)}
              onAddMember={() => onAddMember(project.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectList;
