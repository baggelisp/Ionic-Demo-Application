import { Component, Prop, h } from '@stencil/core';

// interface ITableHeaders {
//   id: string;
//   label: string;
// }

@Component({
  styleUrl: 'my-grid-component.css',
  tag: 'my-grid-component',
})
export class MyGridComponent {

  @Prop() headers: any;
  @Prop() data: any;

  render() {
    return (
    <table>
      <tr>
        { JSON.parse(this.headers).map( header => (
          <th>{header.label}</th>
        ))}
      </tr>
        { JSON.parse(this.data).map( row => {
          return (
            <tr>
              {
                JSON.parse(this.headers).map( header => (
                  <td>{row[header.id]}</td>
                ))
              }
            </tr>
          )


        } )}
     
    </table>
    );
  }
}