import { Composer } from 'telegraf'
import { prisma } from '../../providers/prisma'

export const PERMISSIONS = {
  can_be_edited: {},
  can_manage_chat: {},
  can_change_info: {},
  can_delete_messages: {},
  can_invite_users: {},
  can_restrict_members: {},
  can_pin_messages: {},
  can_promote_members: {},
  can_manage_voice_chats: {},
  is_anonymous: {},
}

const group = new Composer()
const permKeys = Object.keys(PERMISSIONS)

group.on('new_chat_members', async (ctx) => {
  console.log('ctx', ctx.message)
  let permissions = {}

  try {
    // await prisma.group.create({
    //   data: {
    //     id: chat.id,
    //     add_by: from.id,
    //      name: chat.title,
    //     permissions: {},
    //     status: new_chat_member.status,
    //     admins: [],
    //     username: chat.username || "",
    //   }
    // })
  } catch (e) {}
})

export { group }
