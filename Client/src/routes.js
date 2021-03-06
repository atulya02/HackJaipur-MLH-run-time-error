
// Layout Types
import DefaultLayout from "./layouts/Default";
import CustomLayout from "./layouts/Custom";

// Route Views
import dashboard from "./views/Dashboard";
import UserProfile from "./views/UserProfile";
import Errors from "./views/Errors";
import ComponentsOverview from "./views/ComponentsOverview";
import ScheduleInterview from "./views/ScheduleInterview";
import CandidateRegistration from "./views/CandidateRegistration";
import LiveInterviews from "./views/LiveInterviews";
import PastInterviews from "./views/PastInterviews";
import Interview from './views/Interview';
// import InterviewNew from './views/InterviewNew';
import Home from './views/Home';
import GraphicalOverview from "./views/GraphicalOverview";
import LandingPage from "./views/LandingPage";
import Custom1Layout from "./layouts/Custom1";

export default [
  {
    path: "/home",
    exact: true,
    layout: CustomLayout,
    component: Home
  },
  {
    path: "/",
    exact: true,
    layout: Custom1Layout,
    component: LandingPage
  },
  {
    path: "/dashboard",
    layout: DefaultLayout,
    component: dashboard
  },
  {
    path: "/user-profile",
    layout: DefaultLayout,
    component: UserProfile
  },
  {
    path: "/schedule-Interview",
    layout: DefaultLayout,
    component: ScheduleInterview
  },
  {
    path: "/live-Interviews",
    exact: true,
    layout: DefaultLayout,
    component: LiveInterviews
  },
  {
    path: "/past-Interviews",
    exact: true,
    layout: DefaultLayout,
    component: PastInterviews
  },
  {
    path: "/candidate-registration",
    layout: CustomLayout,
    component: CandidateRegistration
  },
  {
    path: "/interview",
    layout: CustomLayout,
    component: Interview
  },
  {
    path: "/errors",
    layout: DefaultLayout,
    component: Errors
  },
  {
    path: "/components-overview",
    layout: DefaultLayout,
    component: ComponentsOverview
  },
  {
    path: "/graphical-overview",
    layout: DefaultLayout,
    component: GraphicalOverview
  },
];
