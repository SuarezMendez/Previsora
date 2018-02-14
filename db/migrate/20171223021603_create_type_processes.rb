class CreateTypeProcesses < ActiveRecord::Migration[5.1]
  def change
    create_table :type_processes do |t|
      #GENERAL
      t.integer   :p_type, default: 0
      t.string    :internal_lawyer
      #IDENTIFIERS
      t.string    :correspondency_radicate, default: "NO APLICA"
      t.string    :case_id_bap, default: "NO APLICA"
      t.string    :case_id_sise, default: "NO APLICA"
      t.string    :case_id_ekogui, default: "NO APLICA"
      t.string    :process_radicate, default: "NO APLICA"
      #LISTS AND STRINGS
      t.string    :sinister, default: "NO APLICA"
      t.string    :attorny, default: "NO APLICA"
      t.string    :active_part, default: "NO APLICA"
      t.string    :passive_part, default: "NO APLICA"
      t.string    :contingency_reason, default: "NO APLICA"
      t.string    :contingency_resume, default: "NO APLICA"
      t.string    :facts, default: "NO APLICA"
      t.string    :coactive_radicate, default: "NO APLICA"
      t.string    :policies, default: "NO APLICA"
      t.string    :sinisters, default: "NO APLICA"
      t.string    :case_onbase, default: "NO APLICA"
      t.string    :tutelage_imp, default: "NO APLICA"
      t.string    :reason_conc, default: "NO APLICA"
      t.string    :reason_inv, default: "NO APLICA"
      t.string    :office_name, default: "NO APLICA"
      t.string    :other_office_name
      t.string    :departament, default: "PENDIENTE"
      t.string    :city_case, default: "PENDIENTE"
      t.string    :process_class
      t.string    :subprocess_class
      t.string    :link_type
      t.string    :branch_policy
      t.string    :branch_commercial
      t.string    :score_contingency
      t.string    :protection
      t.string    :current_stage
      t.string    :litigation_source
      t.string    :instance
      t.string    :case_state
      t.string    :case_termination
      t.string    :reinsurance_type
      t.string    :last_performance
      t.string    :gubernatorial_way
      t.string    :notification_type_second
      t.string    :setence_type_second_company
      t.string    :sentence_type_desacate
      t.string    :reserved_released
      t.string    :money_type
      t.string    :join_committee
      t.string    :committee
      t.string    :coensurance_type
      #VALUES
      t.bigint  :dolar_value_cents
      t.bigint  :detritment_cents
      t.bigint  :ensurance_value_cents
      t.bigint  :contingency_value_cents
      t.bigint  :policy_cents
      t.bigint  :reserve_cents
      t.bigint  :reserved_fees_cents
      t.bigint  :provision_cents
      t.bigint  :fail_value_cents
      t.bigint  :fail_previ_cents
      t.bigint  :payed_value_cents
      t.bigint  :coactive_value_cents
      t.bigint  :garnish_value_cents
      t.bigint  :reensurance_gived_cents
      t.bigint  :auth_value_cents
      t.bigint  :reinsurance_value_cents
      t.bigint  :coensurance_value_cents
      t.bigint  :reconcilie_value_cents
      t.bigint  :cost_value_cents
      #DATES
      t.date      :creation_date
      t.date      :notification_date
      t.date      :attorny_date
      t.date      :desition_date
      t.date      :answer_date
      t.date      :objection_date_desition
      t.date      :objection_date_desition_notification
      t.date      :payment_date
      t.date      :imp_date
      t.date      :last_performance_date
      t.date      :failed_notification_date
      t.date      :objection_notification_date
      t.date      :committee_date
      t.date      :date_notification_desacate
      t.date      :date_answer_desacate
      t.date      :date_notification_desition_desacate
      #NUMBERS
      t.integer   :number, default: 0
      t.integer   :exercise, default: 0
      #BOOLEANS
      t.boolean   :reinsurance_report, default: false
      t.boolean   :recovery, default: false

      t.belongs_to :user, optional: true

      t.timestamps
    end
  end
end
