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
#  creation_date                        :date
#  notification_date                    :date
#  number                               :integer          default(0)
#  exercise                             :integer          default(0)
#  sinister                             :string           default("NO APLICA")
#  attorny                              :string           default("NO APLICA")
#  attorny_date                         :date
#  active_part                          :string           default("NO APLICA")
#  passive_part                         :string           default("NO APLICA")
#  dolar_value_cents                    :integer          default(0), not null
#  dolar_value_currency                 :string           default("USD"), not null
#  detritment_cents                     :integer          default(0), not null
#  detritment_currency                  :string           default("USD"), not null
#  ensurance_value_cents                :integer          default(0), not null
#  ensurance_value_currency             :string           default("USD"), not null
#  contingency_value_cents              :integer          default(0), not null
#  contingency_value_currency           :string           default("USD"), not null
#  contingency_reason                   :string           default("NO APLICA")
#  contingency_resume                   :string           default("NO APLICA")
#  facts                                :string           default("NO APLICA")
#  policy_cents                         :integer          default(0), not null
#  policy_currency                      :string           default("USD"), not null
#  reserve_cents                        :integer          default(0), not null
#  reserve_currency                     :string           default("USD"), not null
#  reserved_fees_cents                  :integer          default(0), not null
#  reserved_fees_currency               :string           default("USD"), not null
#  provision_cents                      :integer          default(0), not null
#  provision_currency                   :string           default("USD"), not null
#  desition_date                        :date
#  answer_date                          :date
#  objection_date_desition              :date
#  objection_date_desition_notification :date
#  fail_value_cents                     :integer          default(0), not null
#  fail_value_currency                  :string           default("USD"), not null
#  fail_previ_cents                     :integer          default(0), not null
#  fail_previ_currency                  :string           default("USD"), not null
#  payed_value_cents                    :integer          default(0), not null
#  payed_value_currency                 :string           default("USD"), not null
#  payment_date                         :date
#  imp_date                             :date
#  coactive_radicate                    :string           default("NO APLICA")
#  policies                             :string           default("NO APLICA")
#  sinisters                            :string           default("NO APLICA")
#  case_onbase                          :string           default("NO APLICA")
#  coactive_value_cents                 :integer          default(0), not null
#  coactive_value_currency              :string           default("USD"), not null
#  garnish_value_cents                  :integer          default(0), not null
#  garnish_value_currency               :string           default("USD"), not null
#  reensurance_gived_cents              :integer          default(0), not null
#  reensurance_gived_currency           :string           default("USD"), not null
#  last_performance_date                :date
#  failed_notification_date             :date
#  objection_notification_date          :date
#  committee_date                       :date
#  tutelage_imp                         :string           default("NO APLICA")
#  date_notification_desacate           :date
#  date_answer_desacate                 :date
#  date_notification_desition_desacate  :date
#  auth_value_cents                     :integer          default(0), not null
#  auth_value_currency                  :string           default("USD"), not null
#  reinsurance_value_cents              :integer          default(0), not null
#  reinsurance_value_currency           :string           default("USD"), not null
#  coensurance_value_cents              :integer          default(0), not null
#  coensurance_value_currency           :string           default("USD"), not null
#  reconcilie_value_cents               :integer          default(0), not null
#  reconcilie_value_currency            :string           default("USD"), not null
#  cost_value_cents                     :integer          default(0), not null
#  cost_value_currency                  :string           default("USD"), not null
#  reason_conc                          :string           default("NO APLICA")
#  reason_inv                           :string           default("NO APLICA")
#  office_name                          :string           default("NO APLICA")
#  reinsurance_report                   :boolean          default(FALSE)
#  recovery                             :boolean          default(FALSE)
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
