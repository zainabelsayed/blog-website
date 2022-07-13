import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// components
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { EarlyAccessFormComponent } from './components/early-access-form/early-access-form.component';
import { YourHubSectionComponent } from './components/your-hub-section/your-hub-section.component';
import { LearnMoreBtnComponent } from './shared/learn-more-btn/learn-more-btn.component';
import { TaskManagementSectionComponent } from './components/task-management-section/task-management-section.component';
import { ScheduleSectionComponent } from './components/schedule-section/schedule-section.component';
import { ReviewsSectionComponent } from './components/reviews-section/reviews-section.component';
import { ReviewsListComponent } from './components/reviews-list/reviews-list.component';
// services
import { SwiperModule } from 'swiper/angular';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ReviewCardComponent } from './components/review-card/review-card.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NewsletterFormComponent } from './components/newsletter-form/newsletter-form.component';
import { BlogComponent } from './pages/blog/blog.component';
import { HttpClientModule } from '@angular/common/http';
import { ArticlesListComponent } from './components/articles-list/articles-list.component';
import { ArticleCardComponent } from './components/article-card/article-card.component';
import { BlogDetailsComponent } from './pages/blog-details/blog-details.component';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    HeroSectionComponent,
    EarlyAccessFormComponent,
    YourHubSectionComponent,
    LearnMoreBtnComponent,
    TaskManagementSectionComponent,
    ScheduleSectionComponent,
    ReviewsSectionComponent,
    ReviewsListComponent,
    ReviewCardComponent,
    FooterComponent,
    NewsletterFormComponent,
    BlogComponent,
    ArticlesListComponent,
    ArticleCardComponent,
    BlogDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SwiperModule,
    HttpClientModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent],
})
export class AppModule { }
