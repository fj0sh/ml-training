export class CreateLendingDto {
  bookId: number;
  borrower: string;
  borrowedAt: Date;
  dueDate: Date;
  returnedAt: Date;
}
