import './App.css';
import About from './Components/About';
import Home from './Components/Home';
import Services from './Components/Services';
import Navbar from './Components/Navbar';
import Info  from './Components/Info'; 
import ProductInfo from './Components/ProductInfo';
import Hook from './Components/Hook';
import Api from './Components/Api';
import Forms from './Components/Forms';
import UserTable from './Components/UserTable';
import Todo from './Components/Todo';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
    
      <Router>
        <Navbar />
        <Routes>
          <Route 
            path='/' 
            element={
              <Home
                Menu="Burger"
                Price="20$"
                recipe="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Reiciendis eaque voluptas incidunt recusandae eius hic quae mollitia quaerat tempore cum?"
                menuImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCLS_1H37rKYCSchTn1Tz8xbhU9TdmbctdiA&s"
              />
            }>
               <Route path='Info' element={<Info/>}/>
              </Route>
          
            
          <Route 
            path='/Services' 
            element={
              <Services 
                heading="My Services" 
                serviceList={[
                  { title: "Single Page Applications (SPA)", description: "Creating seamless single-page applications for a fluid user experience.", 
                    image: "https://www.shutterstock.com/image-vector/spa-single-page-application-acronym-260nw-1892868430.jpg" },

                  { title: "Web Development", description: "Building responsive and engaging websites tailored to client needs.",
                     image: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20221222184908/web-development1.png" },

                  { title: "Responsive Web Pages", description: "Ensuring websites are mobile-friendly and responsive across all devices.",
                     image: "https://img.freepik.com/premium-vector/responsive-web-design-modern-flat-vector-style-concept-image_1624-55.jpg" },

                  { title: "Front-End Optimization", description: "Optimizing front-end performance for faster load times and better user experience.",
                     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOiPfFWIO2knGARxgY7E1HYmKqnVI5MPc6q5QeJtIDbOpOuelhnU0VZac-mfYXlSqJ390&usqp=CAU" },
                     
                  { title: "Web Accessibility", description: "Implementing accessibility standards to ensure inclusivity for all users.", image: "https://pixelstreet.in/blog/wp-content/uploads/2022/06/Website-accessability.png" },
                ]}
              />
            }
          />

          <Route 
            path='/About' 
            element={
              <About
                heading="Hello, I'm Gayatri"
                profession="Front-End Developer"
                description="I'm a dedicated front-end developer with expertise in creating responsive and visually engaging websites using HTML, CSS, JavaScript, and React. I enjoy solving challenges through clean and efficient code, focusing on delivering seamless user experiences."
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU-HA-PfovbMMYQcY5m9_hGKbAj_cKSdRLeg&s"
              />
            }
          />

          <Route path='/Product/:id' element={<ProductInfo/>}/>

          <Route path='/Hook' element={<Hook/>}/>

          <Route path='/Api' element={<Api/>}/>

          <Route path='/Forms' element={<Forms/>}/>

          <Route path="/" element={<UserTable />} />

          <Route path='/UserTable' element={<UserTable/>}/>

          <Route path='/Todo' element={<Todo/>}/>
         
          
        </Routes>
      </Router>
    </>
  );
}

export default App;

