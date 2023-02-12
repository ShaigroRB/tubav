import { Button, Group, Modal, Text, Select } from '@mantine/core'
import React, { useContext, useEffect, useState } from 'react'
import { TubavContext } from '../../TubavContext'
import { LayerCategory } from '../../types'
import { Equipment, EQUIPMENT_IDS } from '../../utils/equipments'

type Props = {
  opened: boolean
  close: () => void
  category: LayerCategory
  equipment: number
  editLayer: (category: LayerCategory, equipment: number) => void
}

/**
 * Modal to edit a layer. There is a preview of the selected element.
 */
export const LayerEditionModal: React.FC<Props> = ({
  opened,
  close,
  category,
  equipment,
  editLayer,
}) => {
  const { categoriesSelectOptions, equipmentsSelectOptions } =
    useContext(TubavContext)

  const [newCategory, setNewCategory] = useState(category)
  const [newEquipmentId, setNewEquipmentId] = useState(equipment)

  // update if the category changes (other layer edition)
  // keep the changes if user closes modal
  // then reopen it immediately after
  useEffect(() => {
    if (newCategory !== category) {
      setNewCategory(category)
    }
    if (newEquipmentId !== equipment) {
      setNewEquipmentId(equipment)
    }
  }, [category, equipment])

  const handleUpdateCategory = (value: string) => {
    const category = value as Equipment
    // get first equipment id for new category
    const equipment_id = EQUIPMENT_IDS[category][0]
    setNewCategory(category)
    setNewEquipmentId(equipment_id)
  }

  const handleUpdateEquipmentId = (value: string) => {
    const equipment_id = parseInt(value)
    setNewEquipmentId(equipment_id)
  }

  const handleSaveModal = () => {
    editLayer(newCategory, newEquipmentId)
    close()
  }

  return (
    <Modal opened={opened} onClose={() => close()} title="Edit layer" size="md">
      <Group>
        <Text>Category:</Text>
        <Select
          data={categoriesSelectOptions}
          value={newCategory}
          onChange={handleUpdateCategory}
          clearable
          searchable
        />
      </Group>

      <Group my="1rem">
        <Text>Equipment:</Text>
        <Select
          data={equipmentsSelectOptions(newCategory)}
          value={newEquipmentId.toString()}
          onChange={handleUpdateEquipmentId}
          clearable
          searchable
        />
      </Group>

      <Button onClick={handleSaveModal}>Update layer</Button>
    </Modal>
  )
}
