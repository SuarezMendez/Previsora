# == Schema Information
#
# Table name: type_processes
#
#  id                                   :integer          not null, primary key
#  p_type                               :integer          default(0)
#  internal_lawyer                      :string
#  correspondency_radicate              :string           default("NO APLICA")
#  case_id_bap                          :string           default("NO APLICA")
#  case_id_sise                         :string           default("NO APLICA")
#  case_id_ekogui                       :string           default("NO APLICA")
#  process_radicate                     :string           default("NO APLICA")
#  sinister                             :string           default("NO APLICA")
#  attorny                              :string           default("NO APLICA")
#  active_part                          :string           default("NO APLICA")
#  passive_part                         :string           default("NO APLICA")
#  contingency_reason                   :string           default("NO APLICA")
#  contingency_resume                   :string           default("NO APLICA")
#  coactive_radicate                    :string           default("NO APLICA")
#  policies                             :string           default("NO APLICA")
#  sinisters                            :string           default("NO APLICA")
#  case_onbase                          :string           default("NO APLICA")
#  tutelage_imp                         :string           default("NO APLICA")
#  reason_conc                          :string           default("NO APLICA")
#  reason_inv                           :string           default("NO APLICA")
#  office_name                          :string           default("NO APLICA")
#  other_office_name                    :string
#  departament                          :string           default("PENDIENTE")
#  city_case                            :string           default("PENDIENTE")
#  process_class                        :string
#  subprocess_class                     :string
#  link_type                            :string
#  branch_policy                        :string
#  branch_commercial                    :string
#  score_contingency                    :string
#  protection                           :string
#  current_stage                        :string
#  litigation_source                    :string
#  instance                             :string
#  case_state                           :string
#  case_termination                     :string
#  reinsurance_type                     :string
#  last_performance                     :string
#  gubernatorial_way                    :string
#  notification_type_second             :string
#  setence_type_second_company          :string
#  sentence_type_desacate               :string
#  reserved_released                    :string
#  money_type                           :string
#  join_committee                       :string
#  committee                            :string
#  coensurance_type                     :string
#  more_protections                     :text
#  facts                                :text             default("NO APLICA")
#  dolar_value_cents                    :integer
#  detritment_cents                     :integer
#  ensurance_value_cents                :integer
#  contingency_value_cents              :integer
#  policy_cents                         :integer
#  reserve_cents                        :integer
#  reserved_fees_cents                  :integer
#  provision_cents                      :integer
#  fail_value_cents                     :integer
#  fail_previ_cents                     :integer
#  payed_value_cents                    :integer
#  coactive_value_cents                 :integer
#  garnish_value_cents                  :integer
#  reensurance_gived_cents              :integer
#  auth_value_cents                     :integer
#  reinsurance_value_cents              :integer
#  coensurance_value_cents              :integer
#  reconcilie_value_cents               :integer
#  cost_value_cents                     :integer
#  creation_date                        :date
#  notification_date                    :date
#  attorny_date                         :date
#  desition_date                        :date
#  answer_date                          :date
#  objection_date_desition              :date
#  objection_date_desition_notification :date
#  payment_date                         :date
#  imp_date                             :date
#  last_performance_date                :date
#  failed_notification_date             :date
#  objection_notification_date          :date
#  committee_date                       :date
#  date_notification_desacate           :date
#  date_answer_desacate                 :date
#  date_notification_desition_desacate  :date
#  number                               :integer          default(0)
#  exercise                             :integer          default(0)
#  reinsurance_report                   :boolean          default(FALSE)
#  recovery                             :boolean          default(FALSE)
#  user_id                              :integer
#  created_at                           :datetime         not null
#  updated_at                           :datetime         not null
#

require 'test_helper'

class TypeProcessTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
