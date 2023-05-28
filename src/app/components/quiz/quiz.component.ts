import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  title:string = 'titulo'
  questions:any
  questionSelected:any

  answers:string[] = []
  answerSelected:string =''

  questionIndes:number = 0
  questionMaxIndex:number = 0

  finished:boolean = true

  constructor() { }

  ngOnInit(): void {
  }

}
