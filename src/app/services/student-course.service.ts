import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { StudentCourseInfo } from '../models/interfaces';
import { CreditUtils } from '../utils/credit-utils';

@Injectable({
  providedIn: 'root'
})
export class StudentCourseService {
  private dataUrl = 'assets/student-info.json'; // URL to the JSON file

  constructor(private http: HttpClient) { }

  getStudentInfo(): Observable<StudentCourseInfo> {
    return this.http.get<StudentCourseInfo>(this.dataUrl).pipe(
      map(data => {        
        if (!data.coreCourses || !data.electiveCourses) {
          console.error('Invalid data structure:', data);  // Log invalid data structure
          throw new Error('Invalid data structure');
        }

        // Transform credits for core courses
        data.coreCourses = data.coreCourses.map(courseItem => ({
          ...courseItem,
          detail: {
            ...courseItem.detail,
            credits: CreditUtils.toCredit(courseItem.detail.credits as unknown as string)
          }
        }));

        // Transform credits for elective courses
        data.electiveCourses = data.electiveCourses.map(courseItem => ({
          ...courseItem,
          detail: {
            ...courseItem.detail,
            credits: CreditUtils.toCredit(courseItem.detail.credits as unknown as string)
          }
        }));

        return data;
      }),
      catchError(error => {
        console.error('Error fetching or processing student info:', error);
        return throwError(() => new Error('Failed to load student info'));
      })
    );
  }
}
