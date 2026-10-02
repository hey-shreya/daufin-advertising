import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SiteLayout } from "@/components/site/SiteLayout";
import Home from "@/pages/Home";
import Work from "@/pages/Work";
import CaseStudy from "@/pages/CaseStudy";
import { About, Contact, Services } from "@/pages/StandardPages";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

export default function App() {
  return <QueryClientProvider client={queryClient}><TooltipProvider><Toaster/><Sonner/><BrowserRouter><Routes><Route element={<SiteLayout/>}><Route path="/" element={<Home/>}/><Route path="/about" element={<About/>}/><Route path="/services" element={<Services/>}/><Route path="/work" element={<Work/>}/><Route path="/work/:slug" element={<CaseStudy/>}/><Route path="/contact" element={<Contact/>}/><Route path="*" element={<NotFound/>}/></Route></Routes></BrowserRouter></TooltipProvider></QueryClientProvider>;
}
