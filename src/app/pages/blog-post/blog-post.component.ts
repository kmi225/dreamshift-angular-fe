import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../../services/blog.service';
import { FooterComponent } from '../../components/footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog-post',
  imports: [
    FooterComponent,
    CommonModule,
  ],
  templateUrl: './blog-post.component.html',
  styleUrl: './blog-post.component.scss'
})
export class BlogPostComponent {

  private readonly blogService = inject(BlogService);
  private readonly route = inject(ActivatedRoute);

  public slug: string = this.route.snapshot.params['slug'];
  public post: any;
  public loading: boolean = false;
  
  ngOnInit() {
    this.loading = true;
    this.blogService.getPostBySlug(this.slug).subscribe((post: any) => {
      this.post = post;
      console.log(this.post);
      this.loading = false;
    }, (error: any) => {
      console.error(error);
      this.loading = false;
    });

    console.log("PARAMS", this.route.snapshot);
    
  } 
}
