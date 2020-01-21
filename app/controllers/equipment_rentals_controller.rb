class EquipmentRentalsController < ApplicationController
        wrap_parameters :equipment_rental, include: [:event_id, :equipment_id]
    
        def new
            equipment_rental = EquipmentRental.new
            render json: equipment_rental
        end
    
        def index
            equipment_rentals = EquipmentRental.all
            render json: equipment_rentals
        end
    
        def show
            equipment_rental = EquipmentRental.find(params[:id])
            render json: equipment_rental
        end
    
        def create
            equipment_rental = EquipmentRental.create(equipment_rental_params)
            render json: equipment_rental
        end
    
        private
    
        def equipment_rental_params
          params.require(:equipment_rental).permit(:event_id, :equipment_id)
        end
    end
