import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import IndexV2 from "./pages/IndexV2";
import IndexV3 from "./pages/IndexV3";
import About from "./pages/About";
import PlatinumSolution from "./pages/PlatinumSolution";
import RubySolution from "./pages/RubySolution";
import Services from "./pages/Services";
import News from "./pages/News";
import Contact from "./pages/Contact";
import Works from "./pages/Works";
import DiscoveryLanding from "./pages/DiscoveryLanding";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import ModernSlaveryPolicy from "./pages/ModernSlaveryPolicy";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/v2" element={<IndexV2 />} />
          <Route path="/v3" element={<IndexV3 />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Works />} />
          <Route path="/solutions/platinum" element={<PlatinumSolution />} />
          <Route path="/solutions/ruby" element={<RubySolution />} />
          <Route path="/solutions/services" element={<Services />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/discovery" element={<DiscoveryLanding />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/modern-slavery-policy" element={<ModernSlaveryPolicy />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
