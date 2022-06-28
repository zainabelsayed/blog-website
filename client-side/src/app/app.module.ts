import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { EarlyAccessFormComponent } from './early-access-form/early-access-form.component';
import { YourHubSectionComponent } from './your-hub-section/your-hub-section.component';
import { LearnMoreBtnComponent } from './learn-more-btn/learn-more-btn.component';
import { TaskManagementSectionComponent } from './task-management-section/task-management-section.component';
import { ScheduleSectionComponent } from './schedule-section/schedule-section.component';
import { ReviewsSectionComponent } from './reviews-section/reviews-section.component';
import { ReviewsListComponent } from './reviews-list/reviews-list.component';
// services
import { SwiperModule } from 'swiper/angular';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ReviewCardComponent } from './review-card/review-card.component';
import { FooterComponent } from './footer/footer.component';
import { NewsletterFormComponent } from './newsletter-form/newsletter-form.component';
import { BlogComponent } from './blog/blog.component';
import { HttpClientModule } from '@angular/common/http';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { ArticleCardComponent } from './article-card/article-card.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
