import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeOneComponent } from './components/pages/home-one/home-one.component';
import { HomeTwoComponent } from './components/pages/home-two/home-two.component';
import { HomeThreeComponent } from './components/pages/home-three/home-three.component';
import { AboutComponent } from './components/pages/about/about.component';
import { JobListComponent } from './components/pages/job-list/job-list.component';
import { FavouriteJobComponent } from './components/pages/favourite-job/favourite-job.component';
import { JobDetailsComponent } from './components/pages/job-details/job-details.component';
import { PostAJobComponent } from './components/pages/post-a-job/post-a-job.component';
import { CandidateListComponent } from './components/pages/candidate-list/candidate-list.component';
import { CandidateDetailsComponent } from './components/pages/candidate-details/candidate-details.component';
import { SingleResumeComponent } from './components/pages/single-resume/single-resume.component';
import { SubmitResumeComponent } from './components/pages/submit-resume/submit-resume.component';
import { PricingComponent } from './components/pages/pricing/pricing.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { CompanyListComponent } from './components/pages/company-list/company-list.component';
import { CompanyDetailsComponent } from './components/pages/company-details/company-details.component';
import { CreateAccountComponent } from './components/pages/create-account/create-account.component';
import { ProfileComponent } from './components/pages/profile/profile.component';
import { SingleProfileComponent } from './components/pages/single-profile/single-profile.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { FaqComponent } from './components/pages/faq/faq.component';
import { TermsAndConditionsComponent } from './components/pages/terms-and-conditions/terms-and-conditions.component';
import { PrivacyPolicyComponent } from './components/pages/privacy-policy/privacy-policy.component';
import { BlogComponent } from './components/pages/blog/blog.component';
import { BlogDetailsComponent } from './components/pages/blog-details/blog-details.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { ProfileLoginComponent } from './components/pages/profile-login/profile-login.component';
import { CompanyProfileLoginComponent } from './components/pages/company-profile-login/company-profile-login.component';
import { CompanyProfileSignUpComponent } from './components/pages/company-profile-sign-up/company-profile-sign-up.component';
import { ProfileSignUpComponent } from './components/pages/profile-sign-up/profile-sign-up.component';
import { ApplyJobsComponent } from './components/pages/apply-jobs/apply-jobs.component';
import { FilterJobsComponent } from './components/pages/filter-jobs/filter-jobs.component';
import { PackagesComponent } from './components/pages/packages/packages.component';
import { AuthGuard } from './components/common/jwtservice/auth.guard';
import { CompanyHomeComponent } from './components/company-panel/company-home/company-home.component';
import { PostJobComponent } from './components/company-panel/post-job/post-job.component';
import { PostedJobComponent } from './components/company-panel/posted-job/posted-job.component';
import { CompanyPackagesComponent } from './components/company-panel/company-packages/company-packages.component';
import { BuyPackageComponent } from './components/company-panel/buy-package/buy-package.component';
import { BoughtPackageDetailComponent } from './components/company-panel/bought-package-detail/bought-package-detail.component';
import { CompanyContactUsComponent } from './components/company-panel/company-contact-us/company-contact-us.component';



const routes: Routes = [
    {path: '', component: HomeOneComponent},
    {path: 'home-two', component: HomeTwoComponent},
    {path: 'home-three', component: HomeThreeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'job-list', component: JobListComponent},
    {path: 'favourite-job', component: FavouriteJobComponent},
    {path: 'job-details', component: JobDetailsComponent},
    {path: 'post-a-job', component: PostAJobComponent},
    {path: 'candidate-list', component: CandidateListComponent},
    {path: 'candidate-details', component: CandidateDetailsComponent},
    {path: 'single-resume', component: SingleResumeComponent},
    {path: 'submit-resume', component: SubmitResumeComponent},
    {path: 'pricing', component: PricingComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'company-list', component: CompanyListComponent},
    {path: 'company-details/:id', component: CompanyDetailsComponent},
    {path: 'create-account', component: CreateAccountComponent},
    {path: 'profile', component: ProfileComponent},
    {path: 'single-profile', component: SingleProfileComponent},
    {path: '404', component: ErrorComponent},
    {path: 'faq', component: FaqComponent},
    {path: 'terms-and-conditions', component: TermsAndConditionsComponent},
    {path: 'privacy-policy', component: PrivacyPolicyComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'blog-details', component: BlogDetailsComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'profile_login',component: ProfileLoginComponent},
    {path:'company_profile_login',component:CompanyProfileLoginComponent},
    {path:'post_job',component:PostAJobComponent},
    {path:'company_profile_sign_up',component:CompanyProfileSignUpComponent},
    {path:'profile_sign_up',component:ProfileSignUpComponent},
    {path: 'apply_jobs/:id',component:ApplyJobsComponent,canActivate:[AuthGuard]},
    {path :'filter_jobs/:title/:city',component:FilterJobsComponent},
    {path:"job_details/:id",component:JobDetailsComponent},
    {path:"packages",component:PackagesComponent},
    {path:"companyHome",component:CompanyHomeComponent},
    {path :"postJob",component:PostJobComponent},
    {path:"postedJobs",component:PostedJobComponent},
    {path:"companyPackages",component:CompanyPackagesComponent},
    {path:"buyPackages/:packageId/:companyId",component:BuyPackageComponent},
   {path:"boughtPackages",component:BoughtPackageDetailComponent},
   {path:"companyContactUs",component:CompanyContactUsComponent},

    // Here add new pages component

    {path: '**', component: ErrorComponent} // This line will remain down from the whole pages component list
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }