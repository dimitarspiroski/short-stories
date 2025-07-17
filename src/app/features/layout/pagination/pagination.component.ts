import { CommonModule } from '@angular/common';
import { Component, input, output, signal } from '@angular/core';

@Component({
    selector: 'pagination',
    imports: [CommonModule],
    templateUrl: './pagination.component.html',
})
export class PaginationComponent {
    pages = input<number[]>([]);
    currentPage = signal<number>(1);
    onPageChange = output<number>();

    changePage(page: number): void {
        this.currentPage.set(page);
        this.onPageChange.emit(this.currentPage());
    }

    nextPage(): void {
        if (this.currentPage() < this.pages().length) {
            this.currentPage.set(this.currentPage() + 1);
            this.onPageChange.emit(this.currentPage());
        }
    }

    previousPage(): void {
        if (this.currentPage() > 1) {
            this.currentPage.set(this.currentPage() - 1);
            this.onPageChange.emit(this.currentPage());
        }
    }
}
