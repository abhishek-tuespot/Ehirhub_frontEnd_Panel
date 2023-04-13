import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreloaderComponent } from './components/common/preloader/preloader.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { FooterComponent } from './components/common/footer/footer.component';
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
import { ContactComponent } from './components/pages/contact/contact.component';
import { BlogDetailsComponent } from './components/pages/blog-details/blog-details.component';
import { BlogComponent } from './components/pages/blog/blog.component';
import { ProfileLoginComponent } from './components/pages/profile-login/profile-login.component';
import { CompanyProfileLoginComponent } from './components/pages/company-profile-login/company-profile-login.component';
import { ProfileSignUpComponent } from './components/pages/profile-sign-up/profile-sign-up.component';
import { CompanyProfileSignUpComponent } from './components/pages/company-profile-sign-up/company-profile-sign-up.component';
import { ApplyJobsComponent } from './components/pages/apply-jobs/apply-jobs.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import { FilterJobsComponent } from './components/pages/filter-jobs/filter-jobs.component';
import { BasicAuthHtppInterceptorService } from './components/common/jwtservice/basic-auth-interceptor.service';
import { PackagesComponent } from './components/pages/packages/packages.component';
import { CompanyHeaderComponent } from './components/company-panel/company-header/company-header.component';
import { CompanyHomeComponent } from './components/company-panel/company-home/company-home.component';
import { CompanyPackagesComponent } from './components/company-panel/company-packages/company-packages.component';
import { PostJobComponent } from './components/company-panel/post-job/post-job.component';
import { PostedJobComponent } from './components/company-panel/posted-job/posted-job.component';
import { MoreAndLessComponent } from './components/company-panel/more-and-less/more-and-less.component';
import { BuyPackageComponent } from './components/company-panel/buy-package/buy-package.component';
import { BoughtPackageDetailComponent } from './components/company-panel/bought-package-detail/bought-package-detail.component';
import { CompanyContactUsComponent } from './components/company-panel/company-contact-us/company-contact-us.component';


@NgModule({
  declarations: [
    AppComponent,
    PreloaderComponent,
    NavbarComponent,
    FooterComponent,
    HomeOneComponent,
    HomeTwoComponent,
    HomeThreeComponent,
    AboutComponent,
    JobListComponent,
    FavouriteJobComponent,
    JobDetailsComponent,
    PostAJobComponent,
    CandidateListComponent,
    CandidateDetailsComponent,
    SingleResumeComponent,
    SubmitResumeComponent,
    PricingComponent,
    DashboardComponent,
    CompanyListComponent,
    CompanyDetailsComponent,
    CreateAccountComponent,
    ProfileComponent,
    SingleProfileComponent,
    ErrorComponent,
    FaqComponent,
    TermsAndConditionsComponent,
    PrivacyPolicyComponent,
    ContactComponent,
    BlogDetailsComponent,
    BlogComponent,
    ProfileLoginComponent,
    CompanyProfileLoginComponent,
    ProfileSignUpComponent,
    CompanyProfileSignUpComponent,
    ApplyJobsComponent,
    FilterJobsComponent,
    PackagesComponent,
    CompanyHeaderComponent,
    CompanyHomeComponent,
    CompanyPackagesComponent,
    PostJobComponent,
    PostedJobComponent,
    MoreAndLessComponent,
    BuyPackageComponent,
    BoughtPackageDetailComponent,
    CompanyContactUsComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,
  
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: BasicAuthHtppInterceptorService, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
