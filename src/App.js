import React from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Header from "./components/Header";
import Footer from "./components/Footer";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
const LazyHome = React.lazy(() => import("./pages/Home"))
const LazyContact = React.lazy(() => import("./pages/Contact"))
const LazyTools = React.lazy(() => import("./pages/tools/Tools"))
const LazyTrainer = React.lazy(() => import("./pages/trainer/Trainer"))
const LazyService = React.lazy(() => import("./pages/service/services"))
const LazyTestimonial = React.lazy(() => import("./pages/testimonial"))
const LazyGoal = React.lazy(() => import("./pages/gools/goals"))
const LazyNotFound = React.lazy(() => import("./pages/NotFound"))
const LazySingleService = React.lazy(() => import("./pages/service/singleService"))
const LazyAddService = React.lazy(() => import("./pages/service/addService"))
const LazyUpdateService = React.lazy(() => import("./pages/service/updateService"))
const LazySingleTool = React.lazy(() => import("./pages/tools/singleTool"))
const LazyAddTool = React.lazy(() => import("./pages/tools/addTool"))
const LazyUpdateTool = React.lazy(() => import("./pages/tools/updateTool"))
const LazySingleTrainer = React.lazy(() => import("./pages/trainer/singleTrainer"))
const LazyAddTrainer = React.lazy(() => import("./pages/trainer/addTrainer"))
const LazyUpdateTrainer = React.lazy(() => import("./pages/trainer/updateTrainer"))
const LazySingleGoal = React.lazy(() => import("./pages/gools/singleGoal"))
const LazyAddGoal = React.lazy(() => import("./pages/gools/addGoal"))
const LazyUpdateGoal = React.lazy(() => import("./pages/gools/updateGoal"))
const LazyTrainee = React.lazy(() => import("./pages/trainee/Trainee"))
const LazySingleTrainee = React.lazy(() => import("./pages/trainee/singleTrainee"))
const LazyAddTrainee = React.lazy(() => import("./pages/trainee/addTrainee"))
const LazyUpdateTrainee = React.lazy(() => import("./pages/trainee/updateTrainee"))

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
          <Routes>
              <Route
              path="/"
              element= { 
                <React.Suspense fallback= "loading...">
                  <LazyHome />
                </React.Suspense>
               } />
              <Route
              path="/contact"
              element= { 
                <React.Suspense fallback= "loading...">
                    <LazyContact />
                </React.Suspense>
               } />


              <Route 
              path="/service"
              element= { 
                <React.Suspense fallback= "loading...">
                  <LazyService />
                </React.Suspense>
               } />
              <Route 
              path="/service/read/:id"
              element= { 
                <React.Suspense fallback= "loading...">
                  <LazySingleService />
                </React.Suspense>
               } />
              <Route 
              path="/service/add"
              element= { 
                <React.Suspense fallback= "loading...">
                  <LazyAddService />
                </React.Suspense>
               } />
              <Route 
              path="/service/update/:id"
              element= { 
                <React.Suspense fallback= "loading...">
                  <LazyUpdateService />
                </React.Suspense>
               } />


              <Route
              path="/tool"
              element= { 
                <React.Suspense fallback= "loading...">
                  <LazyTools />
                </React.Suspense>
               } />
              <Route
              path="/tool/read/:id"
              element= { 
                <React.Suspense fallback= "loading...">
                  <LazySingleTool />
                </React.Suspense>
               } />
              <Route
              path="/tool/add"
              element= { 
                <React.Suspense fallback= "loading...">
                  <LazyAddTool />
                </React.Suspense>
               } />
              <Route
              path="/tool/update/:id"
              element= { 
                <React.Suspense fallback= "loading...">
                  <LazyUpdateTool />
                </React.Suspense>
               } />


              <Route
              path='/testimonial'
              element= { 
                <React.Suspense fallback= "loading...">
                  <LazyTestimonial />
                </React.Suspense>
               } />


              <Route 
              path='/trainer'
              element= { 
                <React.Suspense fallback= "loading...">
                  <LazyTrainer />
                </React.Suspense>
               }/> 
              <Route 
              path='/trainer/read/:id'
              element= { 
                <React.Suspense fallback= "loading...">
                  <LazySingleTrainer />
                </React.Suspense>
               }/> 
              <Route 
              path='/trainer/add'
              element= { 
                <React.Suspense fallback= "loading...">
                  <LazyAddTrainer />
                </React.Suspense>
               }/> 
              <Route 
              path='/trainer/update/:id'
              element= { 
                <React.Suspense fallback= "loading...">
                  <LazyUpdateTrainer />
                </React.Suspense>
               }/>



              <Route 
              path='/trainee'
              element= { 
                <React.Suspense fallback= "loading...">
                  <LazyTrainee />
                </React.Suspense>
               }/> 
              <Route 
              path='/trainee/read/:id'
              element= { 
                <React.Suspense fallback= "loading...">
                  <LazySingleTrainee />
                </React.Suspense>
               }/> 
              <Route 
              path='/trainee/add'
              element= { 
                <React.Suspense fallback= "loading...">
                  <LazyAddTrainee />
                </React.Suspense>
               }/> 
              <Route 
              path='/trainee/update/:id'
              element= { 
                <React.Suspense fallback= "loading...">
                  <LazyUpdateTrainee />
                </React.Suspense>
               }/> 


              <Route 
              path='/goals'
              element= { 
                <React.Suspense fallback= "loading...">
                  <LazyGoal />
                </React.Suspense>
               }/> 
              <Route 
              path='/goals/read/:id'
              element= { 
                <React.Suspense fallback= "loading...">
                  <LazySingleGoal />
                </React.Suspense>
               }/> 
              <Route 
              path='/goals/add'
              element= { 
                <React.Suspense fallback= "loading...">
                  <LazyAddGoal />
                </React.Suspense>
               }/> 
              <Route 
              path='/goals/update/:id'
              element= { 
                <React.Suspense fallback= "loading...">
                  <LazyUpdateGoal />
                </React.Suspense>
               }/> 


              <Route 
              path='/*'
              element= { 
                <React.Suspense fallback= "loading...">
                  <LazyNotFound />
                </React.Suspense>
              }/>
          </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
