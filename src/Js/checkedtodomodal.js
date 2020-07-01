
import React, { Component } from 'react'
import Modal from './modal.js'
import $ from 'jquery';


class Buttons extends Component {
	delete = (e) => {
		this.props.forChecked(e)
		$('#checkedmodal').modal('hide')
	}
	render(){
		return (
			<div>
				<button type="button" className="btn btn-secondary" data-dismiss="modal">Annuler</button>
				<button type="button" className="btn btn-success" onClick = {(e) => {this.delete(e)}}>Enregistrer</button>
			</div>
			)
	}
}

class Checkedtotmodal extends React.PureComponent {
	render(){
		let selectedItem = this.props.todolist[this.props.selectedItem]
		let content = null
		if(selectedItem !== undefined)
		{
			content = <div>
					<p>Avez-vous execute la tache :</p>
					<p>{selectedItem.libelle}</p>
					<div className="custom-control custom-radio">
						<input type="radio" id="customRadio1" name="customRadio" className="custom-control-input" value = "bb" defaultChecked/>
						<label className="custom-control-label" htmlFor="customRadio1">Oui, je l'ai realisee</label>
					</div>
					<div className="custom-control custom-radio">
						<input type="radio" id="customRadio2" name="customRadio" className="custom-control-input"/>
						<label className="custom-control-label" htmlFor="customRadio2">Non, j'ai l'ai abandonnee</label>
					</div>
					<div className="custom-control custom-radio">
						<input type="radio" id="customRadio3" name="customRadio" className="custom-control-input"/>
						<label className="custom-control-label" htmlFor="customRadio3" >Non, je la reporte</label>
					</div>
					</div>
		}
		return (
			<Modal id = "checkedmodal" body ={content} footer = {<Buttons forChecked = {this.props.forChecked																} />}/>
		)
	}
 }

 export default Checkedtotmodal

