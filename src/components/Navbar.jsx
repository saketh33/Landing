import * as React from 'react';
import { useState, useEffect } from 'react';
import logo from '../assets/logo.webp';
import {
  Globe,
  ShoppingBag,
  ArrowRight,
  Boxes,
  Lock,
  BookOpen,
  Gift,
  MessageSquare,
  Puzzle,
  Code,
  FileText,
  LifeBuoy,
  Settings,
  Users,
  Zap,
} from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";

const Badge = ({ children, variant = 'default' }) => {
  const variants = {
    default: 'bg-gray-100 text-gray-900',
    secondary: 'bg-gray-100 text-gray-900',
    outline: 'border border-gray-200 text-gray-900',
  };

  return (
    <span
      className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-semibold ${variants[variant]}`}
    >
      {children}
    </span>
  );
};

const ListItem = React.forwardRef(
  ({ className, title, children, icon: Icon, badge, ...props }, ref) => {
    return (
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className="block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 hover:text-gray-900"
          {...props}
        >
          <div className="flex items-center gap-2">
            {Icon && <Icon className="h-4 w-4" />}
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium leading-none">{title}</span>
              {badge && <Badge variant="secondary">{badge}</Badge>}
            </div>
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-gray-500">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    );
  }
);
ListItem.displayName = "ListItem";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full transition-all duration-500 z-50
        ${scrolled
          ? 'bg-white shadow-md'
          : 'bg-transparent'
        }`}
      style={{ top: scrolled ? '0' : '40px' }}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between gap-2 p-2">
          {/* Logo Section */}
          <div className="flex items-center gap-4">
            <div className="flex items-center bg-black rounded-2xl overflow-hidden">
              <a href="/" className="flex items-center">
                <img src={logo} alt="OneKey" className="h-12 w-25" />
              </a>
            </div>
            <span className="font-bold text-lg whitespace-nowrap">Learn Ledger</span>
          </div>

          {/* Navigation Links */}
          <NavigationMenu className="hidden md:block">
            <NavigationMenuList className="flex gap-3">
              {/* Products Dropdown */}
              <NavigationMenuItem>
                <div className="relative">
                  <NavigationMenuTrigger className="group/res relative flex w-auto cursor-pointer items-center gap-2 rounded-full border bg-white p-2 px-6 text-center font-semibold overflow-hidden">
                    <div className="absolute left-2 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-black transition-all duration-500 group-hover/res:scale-[100] group-hover/res:bg-black"></div>
                    <span className="relative z-10 ml-3 transition-colors duration-200 group-hover/res:text-white">
                      Products
                    </span>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="absolute top-full left-0 mt-2">
                    <div className="w-[600px] p-4 md:grid-cols-2 lg:w-[700px]">
                      <div className="grid gap-3 p-4 md:grid-cols-2">
                        <ListItem
                          href="/touch"
                          title="OneKey Touch"
                          icon={Zap}
                          badge="New"
                        >
                          Next-generation hardware wallet with TouchID security.
                        </ListItem>
                        <ListItem
                          href="/lite"
                          title="OneKey Lite"
                          icon={Gift}
                        >
                          Perfect starter wallet for crypto beginners.
                        </ListItem>
                        <ListItem
                          href="/mini"
                          title="OneKey Mini"
                          icon={Boxes}
                        >
                          Compact and portable security solution.
                        </ListItem>
                        <ListItem
                          href="/classic"
                          title="OneKey Classic"
                          icon={Lock}
                        >
                          The trusted standard in hardware wallets.
                        </ListItem>
                      </div>
                      <div className="p-4 pt-0">
                        <div className="rounded-lg border bg-gray-50 p-4">
                          <h4 className="mb-2 text-sm font-medium">Compare Models</h4>
                          <p className="text-sm text-gray-500">
                            Find the perfect OneKey wallet for your needs.
                          </p>
                          <a
                            href="/compare"
                            className="mt-4 flex items-center text-sm font-medium text-gray-900 hover:text-gray-600"
                          >
                            View Comparison <ArrowRight className="ml-1 h-4 w-4" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </div>
              </NavigationMenuItem>

              {/* App Dropdown */}
              <NavigationMenuItem>
                <div className="relative">
                  <NavigationMenuTrigger className="group/app relative flex w-auto cursor-pointer items-center gap-2 rounded-full border bg-white p-2 px-6 text-center font-semibold overflow-hidden">
                    <div className="absolute left-2 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-black transition-all duration-100 group-hover/app:scale-[100] group-hover/app:bg-black"></div>
                    <span className="relative z-10 ml-3 transition-colors duration-200 group-hover/app:text-white">
                      App
                    </span>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="absolute top-full left-0 mt-2">
                    <div className="w-[600px] p-4">
                      <div className="grid gap-3 p-4 md:grid-cols-2">
                        <div className="row-span-3">
                          <div className="rounded-lg bg-gradient-to-b from-gray-50 to-white p-6">
                            <BookOpen className="h-8 w-8 text-gray-900" />
                            <h3 className="mt-4 text-lg font-medium">Learning Hub</h3>
                            <p className="mt-2 text-sm text-gray-500">
                              Everything you need to know about cryptocurrency security and wallet management.
                            </p>
                            <a
                              href="/learn"
                              className="mt-4 inline-flex items-center text-sm font-medium text-gray-900 hover:text-gray-600"
                            >
                              Start Learning <ArrowRight className="ml-1 h-4 w-4" />
                            </a>
                          </div>
                        </div>
                        <ListItem
                          href="/security"
                          title="Security Architecture"
                          icon={Lock}
                        >
                          Learn about our industry-leading security measures.
                        </ListItem>
                        <ListItem
                          href="/solutions"
                          title="Enterprise Solutions"
                          icon={Puzzle}
                        >
                          Custom solutions for businesses and institutions.
                        </ListItem>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </div>
              </NavigationMenuItem>

              {/* Developer Dropdown */}
              <NavigationMenuItem>
                <div className="relative">
                  <NavigationMenuTrigger className="group/dev relative flex w-auto cursor-pointer items-center gap-2 rounded-full border bg-white p-2 px-6 text-center font-semibold overflow-hidden">
                    <div className="absolute left-2 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-black transition-all duration-100 group-hover/dev:scale-[100] group-hover/dev:bg-black"></div>
                    <span className="relative z-10 ml-3 transition-colors duration-200 group-hover/dev:text-white">
                      Developer
                    </span>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="absolute top-full left-0 mt-2">
                    <div className="w-[600px] p-4">
                      <div className="grid gap-4 p-4">
                        <div className="grid grid-cols-2 gap-6">
                          <div>
                            <h3 className="mb-4 text-sm font-medium">Development Tools</h3>
                            <div className="space-y-2">
                              <ListItem title="API Documentation" icon={Code}>
                                Complete API reference and integration guides.
                              </ListItem>
                              <ListItem title="SDK Resources" icon={FileText}>
                                Software development kits for multiple platforms.
                              </ListItem>
                            </div>
                          </div>
                          <div>
                            <h3 className="mb-4 text-sm font-medium">Community</h3>
                            <div className="space-y-2">
                              <ListItem title="Developer Forum" icon={MessageSquare}>
                                Connect with other developers building on OneKey.
                              </ListItem>
                              <ListItem title="GitHub" icon={Code}>
                                Access our open-source repositories and examples.
                              </ListItem>
                            </div>
                          </div>
                        </div>
                        <div className="mt-4 border-t pt-4">
                          <a
                            href="/developer/start"
                            className="flex items-center text-sm font-medium text-gray-900 hover:text-gray-600"
                          >
                            Get Started with Development <ArrowRight className="ml-2 h-4 w-4" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </div>
              </NavigationMenuItem>

              {/* Resource & Support Combined */}
              <NavigationMenuItem>
                <div className="relative">
                  <NavigationMenuTrigger className="group/products relative flex w-auto cursor-pointer items-center gap-2 rounded-full border bg-white p-2 px-6 text-center font-semibold overflow-hidden">
                    <div className="absolute left-2 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-black transition-all duration-500 group-hover/products:scale-[100] group-hover/products:bg-black"></div>
                    <span className="relative z-10 ml-3 transition-colors duration-200 group-hover/products:text-white">
                      Resource
                    </span>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="absolute top-full left-0 mt-2">
                    <div className="w-[750px] p-4">
                      <div className="grid grid-cols-3 gap-6 p-4">
                        <div>
                          <h3 className="mb-4 text-sm font-medium">Help & Support</h3>
                          <div className="space-y-2">
                            <ListItem title="Help Center" icon={LifeBuoy}>
                              Find answers to common questions and issues.
                            </ListItem>
                            <ListItem title="Contact Support" icon={MessageSquare}>
                              Get help from our support team 24/7.
                            </ListItem>
                          </div>
                        </div>
                        <div>
                          <h3 className="mb-4 text-sm font-medium">Resources</h3>
                          <div className="space-y-2">
                            <ListItem title="Blog" icon={FileText}>
                              Latest news, updates, and insights.
                            </ListItem>
                            <ListItem title="Community" icon={Users}>
                              Join our growing community of users.
                            </ListItem>
                          </div>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </div>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            <button className="hidden md:inline-flex flex-row rounded-full bg-black px-5 py-2 text-base font-semibold text-white transition-all duration-300 hover:bg-lime-300 hover:text-black gap-1">
              <p>Login/</p>
              <p>Signup</p>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;