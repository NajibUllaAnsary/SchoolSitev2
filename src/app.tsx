// @refresh reload
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./app.css";

export default function App() {
  return (
    <Router
      root={(props) => (
        <div class="flex flex-col min-h-screen">
          <Header />
          <div class="pt-16 flex-1">
            <Suspense>{props.children}</Suspense>
          </div>
          <Footer />
        </div>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
