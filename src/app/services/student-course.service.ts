import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, map, of, throwError } from 'rxjs';
import { Credit, StudentInfo } from '../models';
@Injectable({
  providedIn: 'root'
})
export class StudentCourseService {

  private dataUrl = 'assets/student-info.json'; // URL to the JSON file
constructor(private http: HttpClient) { }

  getStudentInfo(): Observable<StudentInfo> {
    return this.http.get<StudentInfo>(this.dataUrl).pipe(
      map(data => {
        data.coreCourses = data.coreCourses.map(course => ({
          ...course,
          course: {
            ...course.course,
            credits: this.transformCredits(course.course.credits as unknown as string)
          }
        }));

        data.electiveCourses = data.electiveCourses.map(course => ({
          ...course,
          course: {
            ...course.course,
            credits: this.transformCredits(course.course.credits as unknown as string)
          }
        }));

        return data;
      })
    );
  }

  private transformCredits(credits: any): Credit {
    if (typeof credits === 'string') {
      const [L, T, P, C] = credits.split('-').map(Number);
      return { L, T, P, C };
    } else if (typeof credits === 'object' && credits !== null) {
      return credits;
    } else {
      throw new Error('Invalid credits format');
    }
  }
}
