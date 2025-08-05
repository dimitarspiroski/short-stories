import { CommonModule } from '@angular/common';
import { Component, input, output, signal } from '@angular/core';
import { IconModel, IconType } from '@common/components/icon';
import { IconComponent } from '@common/components/icon/icon.component';

@Component({
  selector: 'pagination',
  imports: [CommonModule, IconComponent],
  templateUrl: './pagination.component.html',
})
export class PaginationComponent {
  pages = input<number[]>([]);
  currentPage = signal<number>(1);
  pageChange = output<number>();

  protected readonly caretLeftIcon: IconModel = {
    name: IconType.caretLeft,
    style: 'h-3 w-3',
  };
  protected readonly caretRightIcon: IconModel = {
    name: IconType.caretRight,
    style: 'h-3 w-3',
  };

  changePage(page: number): void {
    this.currentPage.set(page);
    this.pageChange.emit(this.currentPage());
  }

  nextPage(): void {
    if (this.currentPage() < this.pages().length) {
      this.currentPage.set(this.currentPage() + 1);
      this.pageChange.emit(this.currentPage());
    }
  }

  previousPage(): void {
    if (this.currentPage() > 1) {
      this.currentPage.set(this.currentPage() - 1);
      this.pageChange.emit(this.currentPage());
    }
  }
}
