import { Component } from '@angular/core';

@Component({
  selector: 'app-right-page',
  templateUrl: './right-page.component.html',
  styleUrls: ['./right-page.component.css']
})
export class RightPageComponent {
  cardtextOutput = ['<h1>What is an index?</h1><ul><li>You have a list of items in your grocery list.</li><ul><li>Grocery List:[ Bananas, Oranges, Kale]</li></ul><li>The first item would be Bananas right?</li><li>In coding the first item is 0</li><ul><li>Bananas: 0</li><li>Oranges: 1</li><li>Kale: 2</li></ul></ul></h2>', '<h1> What does a for loop do?</h1><ul><li>A for loop does exactly what it sounds like.</li><ul><li>It Loops</li></ul></ul><h1>Three parts to a for loop</h1><ul><li>The Index</li><li>The Condition<li>The Counter</li></li></ul>', '<h1>The Length Problem</h1><ul><li>Why is my code printing to 9?</li><li>If we want the code to print out 1-10 we would have to change the index to 1</ul>', '<h1>Review</h1><ul><li>Index starts at 0</li><li>The for loop has three parts: <ul><li>The index, the condition and the counter</li></ul></li></ul>', '<h1>What is a Nested Loop?</h1><ul><li>A loop within a loop</li></ul><h1>How does it work?</h1><ul><li>The outter-loop:</li><ul><li>This does the exact same thing, it loops through the code 10 times</li></ul></ul><h1>So whats the difference?</h1><ul><li>Pseudocode:<ul><li>The Outside forloop loops through one time and prints anything directly inside of it</li><li>In this case we have two things 1. the console log for the i iteration 2.the inner loop of which iterates through the console.log 3 times</li></ul></li><p>In laymans terms: every time the outside loop runs(once) the inside loop runs three times. </p></ul><ul><li>This continues until the outer loop reaches its final count of 10</li></ul>'];
  buttons = ['Index', 'ForLoop', 'The Length problem', 'Review', 'Nested Loops' ];
  cardText: string = '';

  constructor() {}

  getIndex(index: number): void {
    this.cardText = this.cardtextOutput[index];
  }
}